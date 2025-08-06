---
title: "LLM Inference Workload Optimization on Constrained Hardware"
date: 2025-08-02
tags: ["LLM", "Performance Engineering", "Optimization", "Mistral", "Inference", "Systems"]
summary: "Profiled, measured, and improved large language model inference on Apple M2 Pro using quantization, KV-cache tuning, and batching; visualized trade-offs and learned system-level optimization principles."
---

## Table of Contents
1. Introduction  
2. Motivation & Goals  
3. Experimental Setup  
4. Baseline Measurement  
5. Optimization Techniques  
   5.1 Quantization  
   5.2 KV-Cache Tuning  
   5.3 Batching  
6. Instrumentation & Profiling  
7. Results & Analysis  
8. Trade-offs & System Insights  
9. Lessons Learned  
10. Next Steps  
11. References  

---

## 1. Introduction  
Large language models are powerful but resource-intensive. This project focuses on making inference more efficient on constrained hardware by measuring baseline behavior, applying targeted optimizations, and visualizing their combined impact.

## 2. Motivation & Goals  
The aim was to reduce memory usage and improve throughput of an open-source LLM (Mistral-7B variant) running on an Apple M2 Pro, without degrading output quality. Establish a clear baseline, apply system-aware techniques, and quantify their effects.

## 3. Experimental Setup  
- Model: Mistral-7B Q4_K_M variant  
- Hardware: Apple M2 Pro  
- Controlled prompt used for consistency in benchmarking: "Explain memory optimization in LLMs."

## 4. Baseline Measurement  
Baseline runs captured total runtime (~14.38 seconds), peak RAM (~632MB), evaluation speeds (tokens/sec), prompt vs. generation breakdown, and sampling metrics. These provided a reference point to evaluate subsequent changes.

## 5. Optimization Techniques  

### 5.1 Quantization  
Reducing numerical precision (e.g., to 8-bit) to lower memory footprint while retaining acceptable semantic fidelity. This allowed significant RAM savings with minimal degradation in generation quality.

### 5.2 KV-Cache Tuning  
Optimized reuse of key/value cache across autoregressive token generation to avoid redundant computation, smoothing latency and improving efficiency in long outputs.

### 5.3 Batching  
Combined multiple inference requests to amortize per-request overhead and improve overall throughput, balancing prompt size and latency sensitivity.

## 6. Instrumentation & Profiling  
Detailed profiling was conducted using system timers and internal logs to measure metrics like token evaluation speed, sampling efficiency, CPU/system time, and memory usage. This dual visibility (macro and micro) enabled targeted optimization.

## 7. Results & Analysis  
The applied optimizations led to lower memory footprint and higher token throughput. Combined effects from quantization, KV-cache tuning, and batching produced tangible performance gains, validating the value of system-level refinement over naive scaling.

## 8. Trade-offs & System Insights  
- Quantization traded precision for memory efficiency, unlocking capacity without major semantic loss.  
- Efficient cache reuse dramatically reduced redundant computation in generation loops.  
- Batching improved compute utilization but required tuning to avoid latency inflation.  
- Baseline profiling was critical; without it, optimizing would have been unfocused.

## 9. Lessons Learned  
- Measure before you optimize—baseline metrics provide direction.  
- Low-level changes (precision, cache strategy) compound into high-level gains.  
- Visualization of memory vs. latency makes trade-offs interpretable and actionable.

## 10. Next Steps  
- Automate adaptive tuning based on live inference metrics.  
- Expand benchmarking across multiple LLM architectures to compare sensitivity.  
- Package the workflow into a reusable toolkit for constrained deployments.  

## 11. References  
All insights and technical decisions are drawn from the original performance analysis and profiling efforts documented during the optimization process. 