---
sidebar_position: 3
title: What is New and What is Different
---
For many years AEM has been available both:

* On-Premise
* as a Managed Service

There are intrinsic differences between these previous approaches and AEM as a Cloud Service:

* Architecture
* Upgrades
* Cloud Manager
* Onboarding
* Developing
* Operations and Performance
* Identity Management
* Authoring User Interface
* AEM Sites
* AEM Assets

> *NOTE*
>
> *These overviews are not exhaustive, but are intended to provide an introduction.*
>
> *NOTE*
>
> *For further details on the On-Premise and Managed Service versions, see the documentation set for [AEM 6.5](https://experienceleague.adobe.com/docs/experience-manager-65.html?lang=en).*
>
>

## Architecture

> *NOTE*
>
> *For further details see [Architecture](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/overview/architecture.html?lang=en)*.

AEM as a Cloud Service now has:

* A dynamic architecture with a variable number of AEM images.

![Dynamic architecture](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/introduction-03.png?lang=en "Dynamic architecture")

This architecture:

* Is scaled based on the *actual* traffic and *actual* activity.
* Has individual instances that only run when needed.
* Uses modular applications.
* Has an author cluster as default; this avoids downtime for maintenance tasks.

This enables autoscaling for varying usage patterns:

![Autoscaling for varying usage patterns](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/introduction-04.png?lang=en "Autoscaling for varying usage patterns")

## AEM Updates

AEM as a Cloud Service now uses continuous integration and continuous delivery (CI/CD) to ensure that your projects are on the most current AEM version. This means that production and stageing instances are updated to the latest AEM version without any interruption of service for users.

> *NOTE*
>
> *If the update to production environment fails, Cloud Manager will automatically roll back the staging environment. This is done automatically to make sure that after an update completes, both the staging and production environments are on same AEM version.*

There are two types of AEM version updates:

* **AEM Maintenance Updates**

  * Can be released on a daily basis.
  * Are mostly for maintenance purposes, including the latest bug-fixes and security updates.
  * Have minimal impact since changes are applied regularly.
* **New Feature Updates**

  * Are released via a predictable monthly schedule.



## Cloud Manager

Adobe Cloud Manager is integral to the continuous upgrade approach of AEM as a Cloud Service, as it controls all updates to your instances - this is mandatory.

Updates can be triggered by Adobe when a new version of the cloud service is available. Alternatively you can trigger your application updates using the pipelines provided by Cloud Manager.

Cloud Manager is:

* used to manage AEM programs and environments,
* an essential component of AEM as a Cloud Service; each new tenant is first provisioned for Cloud Manager access,
* the single entry point for your operations and development staff.

Specifically, the number of and the type of AEM programs that can be created from the Cloud Manager is derived either:

* from the customer licensing agreement,
* from internal-driven actors when AEM as a Cloud Service is used for enablement, or training,
* from external-driven processes such as trials started from Adobe.com.

Cloud Manager has evolved as a self-service portal where the main components of AEM as a Cloud Service can be created and configured:

* Creating and managing new programs. Refer to [Understanding Programs and Program Types](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/using-cloud-manager/programs/program-types.html?lang=en) for more details.
* Creating and managing the AEM environments within these programs. Refer to [Managing Environments](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/using-cloud-manager/manage-environments.html?lang=en) for more details.
* Creating and managing the pipelines for deploying the customer code and the related configuration to a specific environment. Refer to [Configuring your CI-CD Pipeline](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/using-cloud-manager/cicd-pipelines/introduction-ci-cd-pipelines.html?lang=en) for more details.
* Being notified of important lifecycle events for these components (for example, product updates).

Cloud Manager creates environments in datacenters across many geographic regions, providing for global coverage. CDN Points of Presence (PoPs) ensure low-latency content delivery for customers located all over the world.

## Onboarding

Starting and managing an AEM project is straightforward when using AEM as a Cloud service as Adobe is responsible for many aspects:

* Baseline AEM images are optimized for specific use-cases.
* Many of the manual configuration tasks have been made redundant.

It is also significantly different as there is now:

* An assessment phase to ensure that all pre-requisites have been met; including, for example:

  * Legal requirements
  * Contractual agreements
  * Technical requirements for any existing content and/or code customized by the customer
* Deployment requirements:

  * Code updates; any customer applications developed for a previous version of AEM will need to be reviewed and possibly updated.
  * Content migration

TIP

For a complete overview of the onboarding process, see the [onboarding journey.](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/onboarding/journey/overview.html?lang=en)

## Developing

> *NOTE*
>
> *For further details you can start with [Development Guidelines](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/development-guidelines.html?lang=en) and [Developing - The WKND Tutorial](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/full-stack/develop-wknd-tutorial.html?lang=en).*

The new architecture supporting AEM as a Cloud Service involves some key changes to the overall developer experience. One of the major goals for AEM as a Cloud Service is to allow experienced customers (having used AEM either on-premise or in the context of the Adobe Managed Services) to migrate to AEM as a Cloud Service as quickly as possible, without having to rewrite the bulk of their customized code. However, some adjustments might still be needed.

### Cloud Development

For existing AEM applications to run on AEM as a Cloud Service, the following steps are expected:

* The application code and configuration must be stored in the Git code repository of the associated Cloud Manager program.
* The application code and configuration must be compatible with the latest version of the baseline AEM image (which might be changing daily).

  * The customer application must be built and deployed using the Cloud Manager pipeline associated to the Cloud Manager environment.
* The customer application must pass all the code quality, security and performance gates enforced in the pipeline.
* The images built for the customer application must be deployed by the Cloud Manager pipeline.

This process is commonly referred to as Cloud-first development. Since the end-to-end duration is expected to take minutes (from 20 to 50 depending on the complexity of the application), it is necessary to embrace rapid development methodologies before the pending code and configuration changes are attempted in the cloud.

The Web Console, where OSGI bundles and their associated configuration are managed, and previously part of the AEM QuickStart, is no longer available in AEM as a Cloud Service. The new developer console provides a read-only interface for most of runtime information. With this console, developers can select and login directly to any particular node of an author or publish service, and view the relevant information.

> *NOTE*
>
> *See also [OSGi Configuration](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/deploying/overview.html?lang=en#osgi-configuration)*

Another common requirement for developers is quick access to the log files of the various environments. With AEM as a Cloud Service, the log files of the different nodes in the author and publish nodes are made available via the Cloud Manager, either in the form of files that can be downloaded or via APIs.

Due to the clear separation of code and content, developers can use a particular process for updating content as part of a deployment. The typical use cases for mutable content are:

* Standard *default* content that is part of the customer project (for example, folders, templates, workflows, etc)
* Search index definitions
* ACLs and permissions
* Service users and user groups

### Local Development

In order to support rapid iterations and development, it is also possible to develop AEM applications outside the AEM as a Cloud Service context. For this purpose, the following artifacts are made available to the developers:

* The AEM as a Cloud Service QuickStart: a `.jar` based, standalone installer of the latest AEM code base, with the same functional and API surface.
* The AEM as a Cloud Service Dispatcher SDK: an image-based process for testing and validating Dispatcher configurations locally

> *NOTE*
>
> *It should be noted that the Cloud QuickStart does not allow for all AEM Sites and AEM Assets functionalities. It consists of a simple author environment where the majority of the extensions can be developed and tested.*

## Operations and Performance

> *NOTE*
>
> *For further details start with [Backup](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/operations/backup.html?lang=en), [Indexing](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/operations/indexing.html?lang=en), and [other Maintenance Tasks](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/operations/maintenance.html?lang=en).*

With AEM as a Cloud Service, such operations are automated so that any interruption of service is no longer necessary.

In these areas:

* Many tasks have been automated.
* Topologies are optimized for maximum resilience and efficiency; for example, binaryless replication is the default.
* Heavy-load tasks, such as queues, jobs and bulk-processing tasks have been moved out of the core AEM instance to be handled by shared and dedicated micro-services.

Operations for AEM as a Cloud Service are also supported by a new monitoring, reporting, and alerting infrastructure. This allows the Adobe SREs (Site Reliability Engineers) to proactively keep the service healthy. The various elements of the architecture are equipped with a variety of health checks. If, for some reason, a particular node of the architecture is deemed unhealthy, then it is removed from the service and silently replaced with a new, healthy one.

## Identity Management

> *NOTE*
>
> *For further details see [Security - IMS Support](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/security/ims-support.html?lang=en).*

A major change to AEM as a Cloud Service is the fully integrated use of Adobe IDs for accessing the author tier.

This requires use of the [Adobe Admin console](https://helpx.adobe.com/enterprise/using/admin-console.html) for managing users and user groups. The user accounts enable your users to access Adobe products and services, as user-profile information is centralized in the Adobe Identity Management System (IMS) to be shared across all cloud services. Once assigned access to AEM, the user accounts can be referenced in AEM as a Cloud Service (as before); for example, for defining roles and permissions from the AEM Security user interfaces.

This combines the benefits of:

* Using the Adobe Identity Management System (IMS) to provide single-sign-on across all Adobe cloud applications.
* User preferences remaining local to each particular instance of AEM as a Cloud Service.

## Authoring User Interface

> *NOTE*
>
> *For further details, the [Basic Handling](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/authoring/getting-started/basic-handling.html?lang=en) is a good starting point.*

The basic principles of the authoring user interface (UI), for both Sites and Assets, will be very familiar to anyone who has used AEM in the past.

The main difference is that the UI is purely touch-enabled; the classic UI is no longer available. Otherwise the basics remain unchanged, with only small changes apparent.

## AEM Sites

Adobe Experience Manager Sites as a Cloud Service enables you to provide your customers with personalized, content-led experiences, by combining the power of the AEM Content Management System with AEM Digital Asset Management.

For details see the overview of [Changes to Sites](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/sites-cloud-changes.html?lang=en).

## AEM Assets

Adobe Experience Manager Assets as a Cloud Service offers a cloud-native, PaaS solution for businesses to not only perform their Digital Asset Management and Dynamic Media operations with speed and impact, but also use next-generation smart capabilities, such as AI/ML, from within a system that is always current, always available, and always learning.

Assets offering includes next-generation asset processing in the cloud and high-performance asset ingestion and search.

For details, see [overview and introduction to Assets as a Cloud Service](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/assets/overview.html?lang=en).