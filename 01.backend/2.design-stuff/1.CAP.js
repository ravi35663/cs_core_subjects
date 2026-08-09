/* ==================================== CAP THEOREM ==================================

=> What is CAP Theorem?
   -  Applies to distributed systems with data replication
   -  States that a system cannot guarantee all three at the same time:
   -  Consistency (C), Availability (A), Partition Tolerance (P)
   -  At most, only two of the three can be achieved simultaneously

=> CAP Properties:
   C) Consistency
      - All nodes see the same data at the same time
      - Every read gets the most recent write

   A) Availability
      - System always responds to requests
      - No request is left unanswered (success or failure)

   P) Partition Tolerance
      - System continues to work despite network failures
      - Nodes may lose communication with each other

=> Key Rule:
   - Network partitions are unavoidable
   - When partition happens, system must choose between C or A
   - Hence, you can only have two: CA, CP, or AP

===================== CAP COMBINATIONS =====================
1) CA (Consistency + Availability)
   - Works only when no network partition exists
   - Rare in real distributed systems

2) CP (Consistency + Partition Tolerance)
   - Sacrifices availability during partition
   - System may reject requests to keep data consistent
   - Example: Google Spanner

3) AP (Availability + Partition Tolerance)
   - Sacrifices strong consistency
   - System remains available but may return stale data
   - Example: Amazon DynamoDB

===================== WHY CAP THEOREM MATTERS ===================== 
   - Forces engineers to make conscious trade-offs
   - Choice depends on business requirements
   - Example:
      -> Banking systems → Consistency first
      -> Social media apps → Availability first


===================== RBACK, PBACK, ABACK ===================== 
1) Rback (Rollback)
   - System reverts to last consistent state
   - Used when partial or wrong updates occur
   - Focus: Consistency
   - Example: Failed bank transaction is undone

2) Pback (Partition-back)
   - System reconciles data after partition heals
   - Conflicts resolved later
   - Focus: Partition handling
   - Common in AP systems

3) Aback (Availability-back)
   - System restores service quickly
   - Data may be temporarily stale
   - Focus: Availability
   - Example: Social app stays online with delayed updates

===================== SUMMARY TABLE =====================
| Term  | Meaning                 | Priority       |
|------ |------------------------ |--------------- |
| Rback | Rollback to safe state  | Consistency    |
| Pback | Recover after partition | Partition      |
| Aback | Restore service quickly | Availability   |


===================== INTERVIEW ONE-LINER =====================
   -  CAP theorem says that in a distributed system, you can only guarantee two 
      out of consistency, availability, and partition tolerance, forcing 
      trade-offs based on system requirements.
*/