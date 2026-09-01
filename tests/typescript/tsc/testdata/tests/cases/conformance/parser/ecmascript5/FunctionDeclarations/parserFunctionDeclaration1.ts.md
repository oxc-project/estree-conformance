__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 24,
            "end": 45
          }
        ],
        "start": 20,
        "end": 47
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 47
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 47
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
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 24,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 32,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  }
]
```
