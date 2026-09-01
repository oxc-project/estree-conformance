__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 23
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "globalThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 36
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 43
            },
            "optional": false,
            "computed": false,
            "start": 26,
            "end": 43
          },
          "definite": false,
          "start": 17,
          "end": 43
        }
      ],
      "declare": false,
      "start": 11,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 45,
          "end": 47
        },
        "property": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 54
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 63
          },
          "optional": false,
          "computed": false,
          "start": 48,
          "end": 63
        },
        "optional": false,
        "computed": true,
        "start": 45,
        "end": 64
      },
      "directive": null,
      "start": 45,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 11,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 26,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 55,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  }
]
```
