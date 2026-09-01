__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "M",
        "raw": "'M'",
        "start": 7,
        "end": 10
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 11,
        "end": 13
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "M2",
        "raw": "'M2'",
        "start": 30,
        "end": 34
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 35,
        "end": 37
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 15,
      "end": 37
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
    "start": 0,
    "end": 6
  },
  {
    "type": "String",
    "value": "'M'",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 15,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 23,
    "end": 29
  },
  {
    "type": "String",
    "value": "'M2'",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  }
]
```
