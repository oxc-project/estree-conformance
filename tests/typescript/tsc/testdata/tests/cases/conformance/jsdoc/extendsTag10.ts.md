__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 66
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                        "start": 89,
                        "end": 94
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 85,
                      "end": 96
                    },
                    "start": 79,
                    "end": 97
                  }
                ],
                "start": 69,
                "end": 103
              },
              "expression": false,
              "start": 66,
              "end": 103
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 57,
            "end": 103
          }
        ],
        "start": 27,
        "end": 105
      },
      "abstract": false,
      "declare": false,
      "start": 19,
      "end": 105
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 146
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 151
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 184
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 200
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 203,
                      "end": 204
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 195,
                    "end": 205
                  }
                ],
                "start": 185,
                "end": 211
              },
              "abstract": false,
              "declare": false,
              "start": 166,
              "end": 211
            },
            "start": 159,
            "end": 212
          }
        ],
        "start": 153,
        "end": 214
      },
      "expression": false,
      "start": 132,
      "end": 214
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 251
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 265
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          }
        ],
        "optional": false,
        "start": 260,
        "end": 268
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 269,
        "end": 271
      },
      "abstract": false,
      "declare": false,
      "start": 244,
      "end": 271
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
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 284
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 291,
                "end": 292
              },
              "typeArguments": null,
              "arguments": [],
              "start": 287,
              "end": 294
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 300
            },
            "optional": false,
            "computed": false,
            "start": 287,
            "end": 300
          },
          "definite": false,
          "start": 279,
          "end": 300
        }
      ],
      "declare": false,
      "start": 273,
      "end": 301
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
            "name": "extra",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 313
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 321
              },
              "typeArguments": null,
              "arguments": [],
              "start": 316,
              "end": 323
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "extra",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 329
            },
            "optional": false,
            "computed": false,
            "start": 316,
            "end": 329
          },
          "definite": false,
          "start": 308,
          "end": 329
        }
      ],
      "declare": false,
      "start": 302,
      "end": 330
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 330
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 79,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 132,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 159,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 166,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 172,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 244,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 252,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 260,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 302,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 316,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 324,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  }
]
```
