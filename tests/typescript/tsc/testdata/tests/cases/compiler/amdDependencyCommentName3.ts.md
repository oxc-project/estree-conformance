__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 124
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "m2",
          "raw": "\"m2\"",
          "start": 135,
          "end": 139
        },
        "start": 127,
        "end": 140
      },
      "importKind": "value",
      "start": 115,
      "end": 140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 143
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "optional": false,
          "computed": false,
          "start": 141,
          "end": 145
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 141,
        "end": 147
      },
      "directive": null,
      "start": 141,
      "end": 148
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 115,
  "end": 148
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 115,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "String",
    "value": "\"m2\"",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  }
]
```
