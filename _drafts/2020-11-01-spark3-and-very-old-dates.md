---
title: (Py)Spark 3 and very old dates
tags: datascience python
css: code.css
---

Spark 3.0.0 was released in June this year. Amongst many changes it includes a [switch from using a hybrid calendar to a proleptic Gregorian calendar](https://issues.apache.org/jira/browse/SPARK-26651).
For most users this won't make a big difference but if you are reading or writing parquet files that contain dates before 1582-10-15 or timestamps before 1900-01-01T00:00:00Z then you might run into one of the following two exceptions:
When reading data:
```
org.apache.spark.SparkUpgradeException: You may get a different result due to the upgrading of Spark 3.0: reading dates before 1582-10-15 or timestamps before 1900-01-01T00:00:00Z from Parquet files can be ambiguous, as the files may be written by Spark 2.x or legacy versions of Hive, which uses a legacy hybrid calendar that is different from Spark 3.0+'s Proleptic Gregorian calendar. See more details in SPARK-31404. You can set spark.sql.legacy.parquet.datetimeRebaseModeInRead to 'LEGACY' to rebase the datetime values w.r.t. the calendar difference during reading. Or set spark.sql.legacy.parquet.datetimeRebaseModeInRead to 'CORRECTED' to read the datetime values as it is.
```

When writing data:
```
org.apache.spark.SparkUpgradeException: You may get a different result due to the upgrading of Spark 3.0: writing dates before 1582-10-15 or timestamps before 1900-01-01T00:00:00Z into Parquet files can be dangerous, as the files may be read by Spark 2.x or legacy versions of Hive later, which uses a legacy hybrid calendar that is different from Spark 3.0+'s Proleptic Gregorian calendar. See more details in SPARK-31404. You can set spark.sql.legacy.parquet.datetimeRebaseModeInWrite to 'LEGACY' to rebase the datetime values w.r.t. the calendar difference during writing, to get maximum interoperability. Or set spark.sql.legacy.parquet.datetimeRebaseModeInWrite to 'CORRECTED' to write the datetime values as it is, if you are 100% sure that the written files will only be read by Spark 3.0+ or other systems that use Proleptic Gregorian calendar.
```

Two new settings have been introduced in Spark 3.0.0 for controlling the behavior of Spark when encountering old data. One for reading data (``) and one for writing data (``). Spark will handle the data in different ways depending on if:
- You have old data (<1530? or < 01-01-1900-00:00:00?)
- Spark knows which calendar was used when the data was written
- `` and/or `` are set

## How does Spark know which calendar was used when the data was written?
This is just based on a very simple metadata check. If `` says `spark xyz` Spark assumes the data is using the proleptic Gregorian calendar. Otherwise it assume the worst and will error out? Since Spark 2.4.6 Spark adds it's version to the metadata of parquet files.

To test this we're going to write some old data using Spark 2.4.5, 2.4.6 and 3.0.1.
```bash
mkdir spark-calendartest
cd spark-calendartest
for spark_v in 2.4.5 2.4.6 3.0.1
do
  python3.6 -m venv ".spark${spark_v}"
source .spark245/bin/activate
pip install pyspark==2.4.5
./spark_calendar.py
```
