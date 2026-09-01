__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "win",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 17,
                      "end": 23
                    },
                    "typeArguments": null,
                    "start": 17,
                    "end": 23
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "globalThis",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 43
                    },
                    "typeArguments": null,
                    "start": 26,
                    "end": 43
                  }
                ],
                "start": 17,
                "end": 43
              },
              "start": 15,
              "end": 43
            },
            "start": 12,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 43
        }
      ],
      "declare": true,
      "start": 0,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "win",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 83
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 86
        },
        "optional": false,
        "computed": false,
        "start": 80,
        "end": 86
      },
      "directive": null,
      "start": 80,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "ThisExpression",
          "start": 130,
          "end": 134
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 137
        },
        "optional": false,
        "computed": false,
        "start": 130,
        "end": 137
      },
      "directive": null,
      "start": 130,
      "end": 137
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 148
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 151
        },
        "optional": false,
        "computed": false,
        "start": 138,
        "end": 151
      },
      "directive": null,
      "start": 138,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "win",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 209
        },
        "property": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 210,
          "end": 214
        },
        "optional": false,
        "computed": true,
        "start": 206,
        "end": 215
      },
      "directive": null,
      "start": 206,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "ThisExpression",
          "start": 216,
          "end": 220
        },
        "property": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 221,
          "end": 225
        },
        "optional": false,
        "computed": true,
        "start": 216,
        "end": 226
      },
      "directive": null,
      "start": 216,
      "end": 226
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 237
        },
        "property": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 238,
          "end": 242
        },
        "optional": false,
        "computed": true,
        "start": 227,
        "end": 243
      },
      "directive": null,
      "start": 227,
      "end": 243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 244
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
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "win",
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
    "value": "Window",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 26,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 33,
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
    "value": "win",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 84,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 135,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 138,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "win",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 209,
    "end": 210
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 227,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 237,
    "end": 238
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 242,
    "end": 243
  }
]
```
