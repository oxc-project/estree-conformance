__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "start": 12,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "symObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 43
                },
                "typeArguments": null,
                "start": 37,
                "end": 43
              },
              "start": 35,
              "end": 43
            },
            "start": 29,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 29,
          "end": 43
        }
      ],
      "declare": false,
      "start": 25,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "symObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 52
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 58
        },
        "start": 46,
        "end": 58
      },
      "directive": null,
      "start": 46,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 63
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "symObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 72
        },
        "start": 60,
        "end": 72
      },
      "directive": null,
      "start": 60,
      "end": 73
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 73
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
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "symObj",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
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
    "type": "Identifier",
    "value": "symObj",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "symObj",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  }
]
```
