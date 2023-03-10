#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SpaceFinderBackendStack } from '../lib/space-finder-backend-stack';

const app = new cdk.App();
new SpaceFinderBackendStack(app, 'SpaceFinderBackendStack', {
  stackName: 'SpaceFinder'
});
