# htmlnano-benchmark

A minimal benchmark suite for HTML minifiers (focused on htmlnano).

## Benchmark Results

Please run the following command to reproduce the benchmark results:

```bash
npm run bench
```

```plain
clk: ~4.07 GHz
cpu: 13th Gen Intel(R) Core(TM) i5-13400F
runtime: node 24.8.0 (x64-win32)

benchmark                                         avg (min … max) p75 / p99    (min … top 1%)
----------------------------------------------------------------- -------------------------------
htmlminifier-tc39.es.html-7.08M                       1.03 s/iter    1.03 s        █             
                                             (985.61 ms … 1.11 s)    1.07 s ▅▅▅ ▅  █▅ ▅▅   ▅    ▅
                                          ( 44.08 mb … 105.61 mb)  53.87 mb ███▁█▁▁██▁██▁▁▁█▁▁▁▁█

htmlminifiernext-tc39.es.html-7.08M                   1.61 s/iter    1.63 s          █           
                                                (1.58 s … 1.64 s)    1.64 s ▅  ▅   ▅▅█▅    ▅▅  ▅▅
                                          ( 47.79 mb …  48.70 mb)  48.19 mb █▁▁█▁▁▁████▁▁▁▁██▁▁██

htmlminifierterser-tc39.es.html-7.08M                 1.15 s/iter    1.15 s        █             
                                                (1.12 s … 1.18 s)    1.18 s █      █             
                                          ( 29.11 mb …  91.46 mb)  50.04 mb █▁▁▁█▁████▁▁█▁▁▁▁▁▁▁█

htmlnano-tc39.es.html-7.08M                        643.39 ms/iter 655.51 ms    █                 
                                          (602.72 ms … 734.14 ms) 725.72 ms   ██                 
                                          ( 35.70 mb … 181.48 mb) 157.93 mb ████▁█▁▁▁█▁█▁▁▁▁▁▁▁▁█

minify-tc39.es.html-7.08M                           70.80 ms/iter  72.84 ms      █  █           █
                                            (66.76 ms … 75.66 ms)  75.05 ms ▅▅▅  █  █   ▅  ▅    █
                                          ( 12.81 mb …  12.81 mb)  12.81 mb ███▁▁█▁▁█▁▁▁█▁▁█▁▁▁▁█

minifyhtml-tc39.es.html-7.08M                      261.45 ms/iter 266.77 ms        █ █           
                                          (248.92 ms … 282.49 ms) 268.87 ms ▅    ▅ █ █ ▅▅     ▅▅▅
                                          (  2.39 kb …   2.70 kb)   2.48 kb █▁▁▁▁█▁█▁█▁██▁▁▁▁▁███

----------------------------------------------------------------- -------------------------------
htmlminifier-reimu.html-448K                        62.00 ms/iter  62.01 ms   █  ██ █            
                                            (58.53 ms … 70.66 ms)  67.66 ms ▅ █▅ ██ █           ▅
                                          (  2.57 mb …  13.71 mb)   6.00 mb █▁██▁██▁█▁▁▁▁▁▁▁▁▁▁▁█

htmlminifiernext-reimu.html-448K                    79.22 ms/iter  78.22 ms       █              
                                            (76.76 ms … 92.42 ms)  80.82 ms ▅     █              
                                          (  2.19 mb …   5.39 mb)   3.04 mb █▁▁▇▇▁█▇▁▁▇▁▁▁▁▁▁▁▁▁▇

htmlminifierterser-reimu.html-448K                  65.68 ms/iter  65.97 ms          ██   █      
                                            (59.95 ms … 79.82 ms)  68.76 ms ▅     ▅ ▅██ ▅ █     ▅
                                          (  7.27 mb …  38.43 mb)  31.37 mb █▁▁▁▁▁█▁███▁█▁█▁▁▁▁▁█

htmlnano-reimu.html-448K                            77.42 ms/iter  76.63 ms █   █  █             
                                           (62.32 ms … 126.83 ms)  94.72 ms █▅  █ ▅█ ▅   ▅      ▅
                                          ( 10.88 mb …  22.92 mb)  13.57 mb ██▁▁█▁██▁█▁▁▁█▁▁▁▁▁▁█

minify-reimu.html-448K                               4.30 ms/iter   4.46 ms    ▇▆█               
                                              (3.62 ms … 5.89 ms)   5.65 ms    ███▆▇▃▂           
                                          (262.02 kb … 435.98 kb) 334.72 kb ▂▇████████▄▂▄▃▄▆▂▃▂▄▃

minifyhtml-reimu.html-448K                           6.18 ms/iter   6.37 ms   █▄▂▂ █             
                                              (5.56 ms … 9.33 ms)   7.86 ms ▂ ████▂█▃▃           
                                          (  2.17 kb …   2.37 kb)   2.17 kb ██████████▅▂▄▁▁▁▁▁▁▁▂

----------------------------------------------------------------- -------------------------------
htmlminifier-apple.com.html-259K                    13.41 ms/iter  13.91 ms      ▄█ ▄            
                                            (12.30 ms … 15.16 ms)  15.05 ms   ▅▅█████   ▅▅       
                                          (  9.72 mb …  14.53 mb)  12.10 mb ▅▅███████▅▁████▅▅▁▁▅▅

htmlminifiernext-apple.com.html-259K                31.15 ms/iter  31.63 ms     █                
                                            (29.45 ms … 34.43 ms)  33.00 ms     █ █ █   █        
                                          ( 21.06 mb …  21.58 mb)  21.33 mb █▁▁███████▁▁███▁▁█▁▁█

htmlminifierterser-apple.com.html-259K              14.45 ms/iter  14.76 ms       █              
                                            (13.39 ms … 17.67 ms)  16.89 ms  ▆▃██ █▃█ ▆          
                                          ( 17.33 mb …  21.08 mb)  19.02 mb █████████▁█▁█▁▁▁▁▁▁▁▄

htmlnano-apple.com.html-259K                        38.55 ms/iter  38.79 ms     █                
                                            (35.10 ms … 47.29 ms)  45.70 ms ██  █                
                                          ( 42.94 mb …  52.33 mb)  45.95 mb █████▁▁██▁▁▁▁█▁▁▁▁▁▁█

minify-apple.com.html-259K                           4.15 ms/iter   4.31 ms   ▂█▅▂               
                                              (3.54 ms … 5.70 ms)   5.49 ms  ▅████▅▂             
                                          (469.58 kb … 469.96 kb) 469.58 kb ▂███████▅▇▅▄▆▃▃▃▃▆▄▂▃

minifyhtml-apple.com.html-259K                       3.85 ms/iter   4.00 ms  █▆                  
                                              (3.52 ms … 5.06 ms)   4.67 ms  ██▅▂   ▂▃           
                                          (  2.17 kb …  76.10 kb)   2.59 kb ▆█████████▆▅▂▄▃▃▂▃▂▂▂

----------------------------------------------------------------- -------------------------------
htmlminifier-w3.org.html-50.4K                       3.56 ms/iter   3.72 ms  █                   
                                              (3.19 ms … 5.51 ms)   4.80 ms  ██ ▅▄               
                                          (616.97 kb …   5.26 mb)   2.74 mb ▆██▇█████▄▄▃▃▂▁▂▁▁▁▁▂

htmlminifiernext-w3.org.html-50.4K                   6.29 ms/iter   6.51 ms   ▆ ▄  █▂▂▂          
                                              (5.68 ms … 7.57 ms)   7.29 ms  ██▆█▆▆████▆  ▃▃     
                                          (  3.17 mb …   7.59 mb)   4.22 mb ▅███████████▅▃██▅▃▁▃▃

htmlminifierterser-w3.org.html-50.4K                 3.78 ms/iter   3.96 ms  █▃                  
                                              (3.42 ms … 4.81 ms)   4.60 ms ▃███▃ ▇▆█ ▃          
                                          (  1.63 mb …   7.74 mb)   4.36 mb ███████████▂▃█▇▄▅▃▁▁▂

htmlnano-w3.org.html-50.4K                          10.23 ms/iter  11.04 ms    ▅ █ ▂             
                                             (8.62 ms … 13.57 ms)  13.06 ms ▅▇▇█▂█ █▂  ▇  ▂      
                                          (  5.21 mb …  12.87 mb)   8.80 mb ██████▄██▇▇█▄▇█▄▄▄▇▁▄

minify-w3.org.html-50.4K                           609.47 µs/iter 602.50 µs   █                  
                                            (455.10 µs … 1.63 ms)   1.21 ms  ▂█▄                 
                                          (  7.59 kb … 618.09 kb)  85.73 kb ▁███▇▃▂▂▁▁▂▂▂▂▂▂▂▁▁▁▁

minifyhtml-w3.org.html-50.4K                       753.33 µs/iter 773.50 µs   █▂▂                
                                            (639.40 µs … 1.38 ms)   1.26 ms  ▅███                
                                          (  0.00  b … 149.13 kb)   2.58 kb ▃█████▆▂▂▂▂▁▂▁▁▁▁▁▁▁▁

----------------------------------------------------------------- -------------------------------
htmlminifier-developer.mozilla.org.html-106K         8.49 ms/iter   8.84 ms  ▅     ▅ ▂▅▅ █       
                                              (7.63 ms … 9.88 ms)   9.51 ms ▂█ ▂▇ ▅█▂███ █▂▂     
                                          (  2.70 mb …   9.10 mb)   5.89 mb ██▁██▇██████▇███▇▇▄▇▄

htmlminifiernext-developer.mozilla.org.html-106K    13.88 ms/iter  14.43 ms    ▃    █▃     █     
                                            (12.71 ms … 15.21 ms)  15.00 ms    █▂ ▇▇██▂▇ ▂ █▇▂ ▂▂
                                          (  6.99 mb …  10.30 mb)   9.56 mb ▆▆▆██▆██████▁█▁███▁██

htmlminifierterser-developer.mozilla.org.html-106K   9.10 ms/iter   9.46 ms      ▅▃   █▃         
                                             (8.23 ms … 10.61 ms)  10.58 ms  ▆█▆ ██▃ ▆██         
                                          (  6.15 mb …  11.58 mb)   9.60 mb ████▆███▆███▄▆▄▄▄▄▁▄▄

htmlnano-developer.mozilla.org.html-106K            55.36 ms/iter  57.63 ms               █      
                                            (50.75 ms … 61.70 ms)  58.25 ms ▅  ▅ ▅  ▅     █   ▅ ▅
                                          (232.96 kb …  17.32 mb)   3.45 mb █▁▁█▁█▁▁█▁▁▁▁▁█▁▁▁█▁█

minify-developer.mozilla.org.html-106K               1.44 ms/iter   1.48 ms    █                 
                                              (1.17 ms … 2.31 ms)   2.17 ms   ▅██                
                                          (183.48 kb … 329.37 kb) 255.49 kb ▃▆███▆▃▄▃▃▂▃▂▁▂▃▃▂▂▂▁

minifyhtml-developer.mozilla.org.html-106K           1.68 ms/iter   1.73 ms  █                   
                                              (1.54 ms … 3.03 ms)   2.46 ms ▆█▄██                
                                          (  2.11 kb …  10.23 kb)   2.19 kb ██████▆▃▃▂▂▁▁▁▁▁▁▁▁▁▁
```

## Flamegraphs Generation

Please run the following command to generate flamegraphs for profiling:

```bash
npm run profile
```