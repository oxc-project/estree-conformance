__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 19,
                "end": 21
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 24,
                "end": 26
              },
              "start": 19,
              "end": 26
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 31,
                "end": 35
              },
              "start": 29,
              "end": 35
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 18,
            "end": 36
          }
        ],
        "start": 12,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 38
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 24,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  }
]
```
