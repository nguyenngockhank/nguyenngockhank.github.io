# Pipeline terms

## Pipeline

A pipeline is a series of automated steps that perform a specific task or set of tasks

## Stages

Stages are logical groupings of steps within a pipeline. They break down the pipeline into smaller, more manageable units. Each stage often focuses on a specific task, like building, testing, or deploying a particular component.

## Steps

Steps are the individual actions that make up a stage. These can be anything from compiling code, running tests, building Docker images, or deploying applications to servers.

## Triggers

Pipelines can be triggered by various *events*, such as pushing code to a version control system (e.g., Git push), merging a pull request, or scheduled execution at specific intervals.

## Variables
Pipelines often use variables to store configuration details, credentials, or environment-specific values. This allows for flexibility and avoids **hardcoding** **sensitive information** within the pipeline code.

## Conditions

Steps or stages can be configured to run conditionally based on certain criteria. For example, a pipeline might only run unit tests if changes were made to specific files.

## Artifacts

Pipelines can generate artifacts which are **files** or **data** produced during execution. These artifacts can be used by subsequent steps in the pipeline or downloaded for later analysis.
