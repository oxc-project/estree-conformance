__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "b:block",
        "raw": "\"b:block\"",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 25,
        "end": 57
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "b:/block",
        "raw": "\"b:/block\"",
        "start": 74,
        "end": 84
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 85,
        "end": 115
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 59,
      "end": 115
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 115
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"b:block\"",
    "start": 15,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 59,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 67,
    "end": 73
  },
  {
    "type": "String",
    "value": "\"b:/block\"",
    "start": 74,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  }
]
```
