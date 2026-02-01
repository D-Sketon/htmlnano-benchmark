# htmlnano-benchmark

A minimal benchmark suite for HTML minifiers (focused on htmlnano).

## Benchmark Results

Please run the following command to reproduce the benchmark results:

```bash
npm run bench
```

```plain
clk: ~3.85 GHz
cpu: 13th Gen Intel(R) Core(TM) i5-13400F
runtime: node 24.8.0 (x64-win32)

benchmark                                         avg (min … max) p75 / p99    (min … top 1%)
----------------------------------------------------------------- -------------------------------
htmlminifier-tc39.es.html-7.08M                       1.11 s/iter    1.11 s      █
                                                (1.09 s … 1.18 s)    1.14 s █    █
                                          ( 44.01 mb … 126.39 mb)  65.01 mb █▁█▁▁███▁█▁▁▁▁▁█▁▁▁▁█

htmlminifiernext-tc39.es.html-7.08M                   1.85 s/iter    1.89 s       ██
                                                (1.77 s … 1.98 s)    1.94 s ▅ ▅▅  ██  ▅  ▅▅     ▅
                                          ( 49.68 mb …  50.70 mb)  50.14 mb █▁██▁▁██▁▁█▁▁██▁▁▁▁▁█

htmlminifierterser-tc39.es.html-7.08M                 1.30 s/iter    1.34 s   █
                                                (1.23 s … 1.39 s)    1.38 s ▅▅█ ▅▅   ▅▅    ▅ ▅  ▅
                                          ( 28.98 mb …  91.58 mb)  63.81 mb ███▁██▁▁▁██▁▁▁▁█▁█▁▁█

htmlnano-tc39.es.html-7.08M                        666.30 ms/iter 680.87 ms █   █
                                          (613.12 ms … 757.55 ms) 727.06 ms █  ▅█▅   ▅ ▅▅      ▅▅
                                          (125.25 mb … 152.94 mb) 137.59 mb █▁▁███▁▁▁█▁██▁▁▁▁▁▁██

minify-tc39.es.html-7.08M                           79.23 ms/iter  83.53 ms    █           █     
                                            (70.84 ms … 90.87 ms)  87.91 ms ▅ ▅█  ▅▅   ▅▅  █    ▅
                                          ( 12.81 mb …  12.81 mb)  12.81 mb █▁██▁▁██▁▁▁██▁▁█▁▁▁▁█

minifyhtml-tc39.es.html-7.08M                      307.49 ms/iter 315.97 ms      █     █        █
                                          (289.50 ms … 340.54 ms) 321.79 ms ▅ ▅▅ █  ▅  █    ▅   █
                                          (  1.27 kb …   2.70 kb)   2.35 kb █▁██▁█▁▁█▁▁█▁▁▁▁█▁▁▁█

----------------------------------------------------------------- -------------------------------
htmlminifier-reimu.html-448K                        69.94 ms/iter  75.77 ms █
                                            (60.93 ms … 82.43 ms)  79.45 ms █
                                          (  2.27 mb …  13.73 mb)   5.75 mb █▁▁▁▁██▁█▁██▁▁▁▁██▁▁█

htmlminifiernext-reimu.html-448K                    84.86 ms/iter  86.29 ms  ██
                                           (77.76 ms … 105.22 ms)  94.28 ms ▅██   ▅▅ ▅▅  ▅      ▅
                                          (564.34 kb …   5.84 mb)   3.06 mb ███▁▁▁██▁██▁▁█▁▁▁▁▁▁█

htmlminifierterser-reimu.html-448K                  70.22 ms/iter  73.84 ms   █    █
                                            (63.93 ms … 82.81 ms)  76.07 ms ▅▅█    █  ▅ ▅   ▅▅  ▅
                                          (  7.47 mb …  42.63 mb)  33.03 mb ███▁▁▁▁█▁▁█▁█▁▁▁██▁▁█

htmlnano-reimu.html-448K                           219.59 ms/iter 230.59 ms       █      █
                                          (178.90 ms … 276.63 ms) 253.44 ms ▅  ▅ ▅█   ▅  █▅▅    ▅
                                          ( 38.03 mb …  40.25 mb)  38.99 mb █▁▁█▁██▁▁▁█▁▁███▁▁▁▁█

minify-reimu.html-448K                               4.81 ms/iter   4.97 ms   ▄▅█
                                              (4.00 ms … 7.13 ms)   6.54 ms  ▂███▆ ▃
                                          (295.33 kb … 435.98 kb) 335.86 kb ▅█████▃█▇▁▄▁▂▃▆▆▄▄▅▄▂

minifyhtml-reimu.html-448K                           7.63 ms/iter   7.69 ms  █
                                             (6.42 ms … 13.09 ms)  12.59 ms ▃█▃
                                          (  2.17 kb …  75.13 kb)   2.99 kb ███▅▃▂▂▂▄▁▁▃▁▂▁▂▁▁▅▁▂

----------------------------------------------------------------- -------------------------------
htmlminifier-apple.com.html-259K                    16.45 ms/iter  18.93 ms █ ▄
                                            (13.21 ms … 21.81 ms)  21.63 ms █▅█           ▅
                                          ( 11.13 mb …  13.12 mb)  12.11 mb ████▅▅▅█▅▅██▁▁█▅█▅▅▁█

htmlminifiernext-apple.com.html-259K                35.58 ms/iter  38.28 ms  █
                                            (31.61 ms … 42.99 ms)  42.56 ms  ███
                                          ( 21.25 mb …  21.53 mb)  21.35 mb ████▁███▁▁▁▁█▁█▁▁▁█▁█

htmlminifierterser-apple.com.html-259K              17.08 ms/iter  17.85 ms   ██▃▃
                                            (14.46 ms … 23.54 ms)  21.70 ms ▇ ████▂  ▂   ▂   ▂  ▂
                                          ( 17.84 mb …  21.02 mb)  19.02 mb █▆█████▆▆█▁▁▁█▁▁▆█▁▆█

htmlnano-apple.com.html-259K                        28.23 ms/iter  30.97 ms █
                                            (23.51 ms … 36.49 ms)  33.65 ms █  ██    ██
                                          ( 20.23 mb …  32.53 mb)  25.93 mb █▁████▁▁▁██▁██▁████▁█

minify-apple.com.html-259K                           4.63 ms/iter   5.04 ms  █
                                              (3.69 ms … 8.66 ms)   8.01 ms  █▅ ▂
                                          (469.58 kb … 469.91 kb) 469.58 kb ▆████▆▅▅▅▆▄▂▁▁▂▂▁▂▁▁▂

minifyhtml-apple.com.html-259K                       4.78 ms/iter   4.94 ms  █
                                              (3.90 ms … 8.30 ms)   8.14 ms ▅█
                                          (  2.17 kb …   2.37 kb)   2.17 kb ███▆▂▃▁▂▂▂▂▁▁▂▃▅▂▁▁▁▁

----------------------------------------------------------------- -------------------------------
htmlminifier-w3.org.html-50.4K                       4.36 ms/iter   5.27 ms  █
                                              (3.49 ms … 6.24 ms)   6.18 ms ▇█▂▂
                                          (744.41 kb …   4.98 mb)   2.75 mb █████▅▅▂▁▁▂▂▁▆▄▄▄▆█▄▂

htmlminifiernext-w3.org.html-50.4K                   7.31 ms/iter   7.51 ms  █▃
                                             (6.20 ms … 10.75 ms)  10.42 ms  ██▃▂
                                          (  3.62 mb …   8.10 mb)   4.24 mb ██████▄▅▂▁▃▁▂▂▁▂▂▃▃▆▂

htmlminifierterser-w3.org.html-50.4K                 4.64 ms/iter   5.00 ms ▂█
                                              (3.78 ms … 7.67 ms)   6.83 ms ██▅▃
                                          (  1.03 mb …   7.50 mb)   4.38 mb ████▆▄▅▄▆▄▂▃▁▂▃▄▄▄▂▄▃

htmlnano-w3.org.html-50.4K                          14.00 ms/iter  15.64 ms      █
                                            (11.10 ms … 18.93 ms)  18.57 ms   ▃ ▃█         ▃
                                          (  5.78 mb …  11.62 mb)   9.33 mb ▆▆█▆███▄█▁▆▄▄▄▄█▄▁▁▆▄

minify-w3.org.html-50.4K                           686.29 µs/iter 676.70 µs  █
                                            (493.80 µs … 1.87 ms)   1.51 ms  ██
                                          (  7.59 kb … 620.23 kb)  85.73 kb ████▅▂▂▂▂▂▂▂▂▂▂▂▂▂▂▁▁

minifyhtml-w3.org.html-50.4K                       856.47 µs/iter 829.80 µs   █
                                            (682.30 µs … 1.70 ms)   1.37 ms   █▇
                                          (  2.17 kb … 181.13 kb)   2.98 kb ▂▃██▅▃▂▂▁▁▁▁▁▁▁▁▁▂▄▂▁

----------------------------------------------------------------- -------------------------------
htmlminifier-developer.mozilla.org.html-106K         9.60 ms/iter   9.69 ms  █
                                             (8.41 ms … 16.40 ms)  15.23 ms ███
                                          (  3.04 mb …   8.76 mb)   5.89 mb ████▇▃▁▂▃▁▁▃▁▃▁▂▂▁▁▁▂

htmlminifiernext-developer.mozilla.org.html-106K    16.38 ms/iter  16.30 ms  ███
                                            (14.06 ms … 23.20 ms)  22.88 ms  ███
                                          (  7.28 mb …  12.04 mb)   9.64 mb ▇███▄▄▄▄▁▁▄▁▄▁▁▄▄▁▄▄▄

htmlminifierterser-developer.mozilla.org.html-106K  10.97 ms/iter  11.54 ms  █ ▂ █             ▂
                                             (9.07 ms … 14.90 ms)  13.84 ms ▅█ █▂█ ▂▂ ▅        █▇
                                          (  6.21 mb …  11.10 mb)   9.60 mb ██▇███▇██▄█▁▁▇▄▁▁▁▁██

htmlnano-developer.mozilla.org.html-106K            37.68 ms/iter  39.14 ms █       █ ██        █
                                            (32.66 ms … 44.08 ms)  41.59 ms █  ▅    █ ██▅  ▅▅   █
                                          ( 29.95 mb …  34.84 mb)  31.60 mb █▁▁█▁▁▁▁█▁███▁▁██▁▁▁█

minify-developer.mozilla.org.html-106K               1.59 ms/iter   1.71 ms  █
                                              (1.26 ms … 3.13 ms)   2.86 ms  █▄
                                          (192.92 kb … 276.92 kb) 255.33 kb ▅██▆▃▃▃▃▃▂▂▂▃▂▂▂▂▂▁▁▁

minifyhtml-developer.mozilla.org.html-106K           1.99 ms/iter   1.95 ms  █
                                              (1.63 ms … 4.06 ms)   3.32 ms  ██
                                          (  2.17 kb …   2.37 kb)   2.17 kb ▁███▄▂▂▂▂▂▂▁▂▂▁▁▃▃▁▂▁
```

## Flamegraphs Generation

Please run the following command to generate flamegraphs for profiling:

```bash
npm run profile
```