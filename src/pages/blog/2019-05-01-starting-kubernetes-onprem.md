---
templateKey: blog-post
title: Planning Kubernetes On-Prem
date: 2019-05-01T15:04:10.000Z
description: Planning an onprem kubernetes cluster
tags:
  - kubernetes
  - onprem
---

This blog post marks the beginning of what I expect to be a long journey of moving off a more traditional infrastructure to a microservice, container based infrastructure.

Currently systems are virtual machines (mainly windows) running on microsoft hyper-v clusters and the applications are various flavors of .NET.  More legacy based components are WCF services hosted in IIS and newer components are .NET core hosted in IIS.

Common tools that we use today

- Octopus for deployments
- Proget for nuget packages and private docker repo
- Gitlab for source code, builds, continuous integration
- TeamCity - legacy applications are largely built here
- SVN - legacy applications source code here

Plans for new architecture

- Kubernetes cluster on premise - Using Rancher to provision cluster 
- Mix of Linux and Windows kubernetes worker nodes.  As of version 1.14 windows nodes are supported, however 1.14 is experiment in Rancher as of this time.
- New applications will be .NET Core on Linux
- Deploy to Kubernetes using Octopus
- Use Gitlab for CI and docker private repo (move off of proget)

Things that need to be investigated

- Ingress into the cluster
- Is Istio something worth considering
- Logging, Monitoring - Currently we use the ELK stack and deploy filebeat and metricbeat to our servers

There are lots of things I am overlooking, but I wanted to do a core dump of what I am currently thinking about.  More to come - feel free to contact via email - kyle.engibous@gmail.com or twitter @kengibous.