16 objects in Cloud storage:
```

~/s/x/t/d/gcp ❯ gsutil du gs://somebucket/input_16p
0            gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/_SUCCESS
25487308     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00000-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25426657     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00001-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25412869     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00002-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25376400     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00003-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25485966     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00004-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25396147     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00005-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25446317     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00006-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25454379     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00007-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25452339     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00008-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25335924     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00009-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25403425     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00010-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25409242     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00011-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25490823     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00012-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25439124     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00013-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25326289     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00014-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
25387264     gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/part-00015-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet
406730473    gs://fxei-data-platform-sandbox-lake/simontest/input/000000_010000_16p/
```

```
java -jar parquet-tools-1.10.1.jar meta ~/Downloads/simontest_input_000000_010000_16p_part-00001-51e26320-752d-43e2-8fb6-2d5e9dd384af-c000.snappy.parquet | grep -i "row group"

row group 1:                                     RC:41337 TS:48786078 OFFSET:4 
row group 1:                                     RC:41337 TS:48669547 OFFSET:4 
row group 1:                                     RC:41337 TS:48667727 OFFSET:4 
row group 1:                                     RC:41335 TS:48775598 OFFSET:4 
row group 1:                                     RC:41334 TS:48731302 OFFSET:4 
row group 1:                                     RC:41334 TS:48711858 OFFSET:4 
row group 1:                                     RC:41334 TS:48719729 OFFSET:4 
row group 1:                                     RC:41333 TS:48859378 OFFSET:4 
row group 1:                                     RC:41333 TS:48784415 OFFSET:4 
row group 1:                                     RC:41332 TS:48634675 OFFSET:4 
row group 1:                                     RC:41332 TS:48674047 OFFSET:4 
row group 1:                                     RC:41332 TS:48755350 OFFSET:4 
row group 1:                                     RC:41340 TS:48825383 OFFSET:4 
row group 1:                                     RC:41339 TS:48736987 OFFSET:4 
row group 1:                                     RC:41338 TS:48579902 OFFSET:4 
row group 1:                                     RC:41337 TS:48648952 OFFSET:4 
```
