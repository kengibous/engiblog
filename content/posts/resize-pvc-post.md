+++ 
draft = false
date = 2020-01-19T17:28:52-06:00
title = "Resizing a Persistent Volume Claim (PVC)"
description = "How to resize a persistent volume claim"
slug = ""
authors = []
tags = ["kubernetes", "pvc", "storage"]
categories = []
externalLink = ""
series = []
+++

I recently encountered a scenario where one of our stateful deployments that uses a pvc (Persistent Volume Claim) was running very low of space.  Having not encountered this scenario, I foolishly assumed that there would be some mechanism to easily expand the existing pvc being used by the stateful deployment.

As of Kubernetes 1.11 supporting for expanding PVCs is enabled by default and a large range of volumes types have  support such as Azure Disk, gcePersistentDisk and others.

https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims

Unfortunately we are on-premise and using our SAN.  Luckily storage provider provides an excellent CSI driver, but currently it does not support expanding pvcs.

Also I should mention that CSI volume expansion was not available until kubernetes 1.16 by default and is in beta.

Make sure you know the filesystem on the pvc if applicable as only XFS, Ext3 and Ext4 can be resized.  

Since expanding the pvc was out of the question in my case, I decided to go the route of allocating a new larger pvc and then figure out a way to copy the existing smaller pvc to the new one.

I achieved this by doing the following

* Shutting down the stateful workload
* Starting a busybox pod and assigning both pvcs to the pod. One mounted to /mnt/pvc-old and the larger one to /mnt/pvc-new
* From within the busybox pod I ran command *cp -ar /old-pvc/** /new-pvc/*
* I also had to run *chmod 0700 -R /new-pvc* however I think that was due to the nature of the application using the pvc
* Once completed I destroyed the busybox pod and assigned the new pvc to the stateful pod.  I started the stateful pod and things functioned as expected

This seemed pretty involved and I am curious if there are better approaches.  Luckily my storage vendor informed me that will support expanding pvcs early this year.