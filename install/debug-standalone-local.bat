@echo off

REM Copyright (C) 2016 VSCT
REM
REM Licensed under the Apache License, Version 2.0 (the "License");
REM you may not use this file except in compliance with the License.
REM You may obtain a copy of the License at
REM
REM http://www.apache.org/licenses/LICENSE-2.0
REM
REM Unless required by applicable law or agreed to in writing, software
REM distributed under the License is distributed on an "AS IS" BASIS,
REM WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
REM See the License for the specific language governing permissions and
REM limitations under the License.

SET KEYCLOAK_VERSION=keycloak-2.3.0.Final
SET JBOSS_HOME=.\%KEYCLOAK_VERSION%

%JBOSS_HOME%\bin\standalone.bat -b 0.0.0.0 -bmanagement 0.0.0.0 -c standalone.xml --debug
       