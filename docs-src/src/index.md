---
title: Docs Home
subTitle: 2024-12-05 by Frank Cheung
description: AJ Utilities Home
date: 2025-01-05
tags:
  - AJ Utilities Home
layout: layouts/docs.njk
---
# AJ-Workflow 简介
AJ-Workflow，一种简明扼要的工作流模型，易维护、易扩展 ——轻量级、开源、免费。
[管理主界面]
进入演示，账号：demo_user，密码：demo_user

AJAXJS Workflow可简称为 aj-wf，主打轻量级和简洁。总结起来 aj-wf 就是一句话：2个 Jar 包7张表，Jar 包约 100kb，表创建到数据库中就可以了，当然还有一个配置文件。
## 特点

- 轻量强大，引擎核心仅 8 张表实现逻辑数据存储
- 组件化集成，采用组件化设计方案、方便引入任何开发平台，接口插拔式设计更加灵活的自定义扩展。
- 中国式审批。支持动态加签、任意驳回、拿回、撤销、已阅、沟通等中国式特色审批

## 工作流概念

工作流框架的基本概念：

> 工作流（Workflow），就是“业务过程的部分或整体在计算机应用环境下的自动化”，它主要解决的是“使在多个参与者之间按照某种预定义的规则传递文档、信息或任务的过程自动进行，从而实现某个预期的业务目标，或者促使此目标的实现”。
> 工作流管理系统（Workflow Management System, WfMS）是一个软件系统，它完成工作量的定义和管理，并按照在系统中预先定义好的工作流逻辑进行工作流实例的执行。工作流管理系统不是企业的业务系统，而是为企业的业务系统的运行提供了一个软件的支撑环境。

常见的工作流框架：JBPM、Activiti、OSWorkFlow。
