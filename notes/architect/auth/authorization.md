---
tags: ["HLD"]
---

# Authorization

Authorization is the application of constraints on who (or what) can perform attempted actions or access resources that they have requested. In the context of web applications, access control is dependent on authentication and session management:
- **Authentication** identifies the user and confirms that they are who they say they are.
- **Session management** identifies which subsequent HTTP requests are being made by that same user.
- **Authorization** determines whether the user is allowed to carry out the action that they are attempting to perform.


<TagLinks />


## Categorized by user perspective 

### Vertical access controls (Role-Based)

Vertical access controls are mechanisms that restrict access to sensitive functionality that is not available to other types of users.

With vertical access controls, different types of users have access to different application functions. 

**For example**, an administrator might be able to modify or delete any user's account, while an ordinary user has no access to these actions. Vertical access controls can be more fine-grained implementations of security models designed to enforce business policies such as separation of duties and least privilege.


### Horizontal access controls 

Horizontal access controls are mechanisms that restrict access to resources to the users who are specifically allowed to access those resources.

With horizontal access controls, different users have access to a subset of resources of the same type. 

**For example**, a banking application will allow a user to view transactions and make payments from their own accounts, but not the accounts of any other user.

### Context-dependent access controls (Attribute-Based)

Context-dependent access controls restrict access to functionality and resources based upon the state of the application or the user's interaction with it.

Context-dependent access controls prevent a user performing actions in the wrong order. 

**For example**, a retail website might prevent users from modifying the contents of their shopping cart after they have made payment.


## Categorized by academic names 😎

### Discretionary Access Control (DAC)

DAC provides access rights depending upon the rules already set by the administrators. In this type of access control model, each resource has an owner or admin that decides to whom to give access and at what level. 

### Role-Based Access Control (RBAC)

System administrators use the RBAC (or non-discretionary) access control model to give access based on the organizational roles, rather than considering a single user account within a company. Only people with roles that need to do the particular work are given access to the resource.


### Attribute-Based Access Control (ABAC)

Attribute based access control (ABAC) uses an algorithm or policy to set rules for access based on user attributes, such as: 
- IP location
- Position
- Time of day
- Security clearance


### Mandatory Access Control (MAC)

Mandatory access control (MAC) is generally considered one of the strictest types of access control. Instead of the system giving access to a user through their attributes or credentials, MAC relies entirely on a system administrator giving permission – most frequently

**For example**, only a reviewers can approve the Pull Request.

## Refs
- [3 Types of Access Control: IT Security Models Explained](https://www.strongdm.com/blog/types-of-access-control)
- [What are the 4 Types of Access Control?](https://www.threatblockr.com/blog/4-types-of-access-control/)
- [Access control vulnerabilities and privilege escalation](https://portswigger.net/web-security/access-control)