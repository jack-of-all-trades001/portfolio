// EDIT THIS FILE to add an engineering note. Each body string is one paragraph.
export type Note = { slug: string; title: string; summary: string; body: string[]; tags: string[] };
export const notes: Note[] = [
  { slug: "hashset-key-mutation", title: "What happens when a HashSet key mutates", tags: ["Java"],
    summary: "The set stores the element by its hash at insertion time.",
    body: ["If a key's hashCode depends on a field and that field changes after insertion, the element sits in the wrong bucket. contains() can then return false even though the object is in the set.", "Rule I take from it: keys should be immutable, or at least never change in ways that affect equals/hashCode."] },
  { slug: "idempotency", title: "What idempotency means for payments", tags: ["Reliability"],
    summary: "Repeating a request must not repeat its effect.",
    body: ["Networks retry. If a 'transfer' request is sent twice, the money should move once. A common approach is a client-supplied idempotency key that the server records alongside the result.", "I'm studying this and have not implemented it in my wallet yet."] },
  { slug: "jwt-layers", title: "Why JWT authentication has several layers", tags: ["Security"],
    summary: "Passwords, hashing, tokens and authorization are separate concerns.",
    body: ["Hashing protects stored passwords. A token proves a login happened. Authorization decides what that user may do. Mixing them up is where bugs hide.", "I'm implementing this in the wallet project now."] },
];
