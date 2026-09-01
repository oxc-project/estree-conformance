__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Error",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 15
        },
        "typeArguments": null,
        "arguments": [],
        "start": 6,
        "end": 17
      },
      "start": 0,
      "end": 18
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 19
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "throw",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 9,
  "end": 9
}
```
__ESTREE_TEST__:TOKENS:
```json
[]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "server-only",
        "raw": "\"server-only\"",
        "start": 7,
        "end": 20
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 21
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "String",
    "value": "\"server-only\"",
    "start": 7,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  }
]
```
