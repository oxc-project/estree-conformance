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
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 35,
                      "end": 39
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 51
                    },
                    "optional": false,
                    "computed": false,
                    "start": 35,
                    "end": 51
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 60,
                      "end": 62
                    },
                    "id": null,
                    "generator": false,
                    "start": 54,
                    "end": 62
                  },
                  "start": 35,
                  "end": 62
                },
                "directive": null,
                "start": 35,
                "end": 63
              }
            ],
            "start": 18,
            "end": 69
          }
        ],
        "start": 12,
        "end": 71
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 71
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
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 78
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 90
          },
          "optional": false,
          "computed": false,
          "start": 73,
          "end": 90
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 73,
        "end": 92
      },
      "directive": null,
      "start": 73,
      "end": 93
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ElementsArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 126
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 140
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "superisArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 182
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 185,
                        "end": 190
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 198
                      },
                      "optional": false,
                      "computed": false,
                      "start": 185,
                      "end": 198
                    },
                    "definite": false,
                    "start": 170,
                    "end": 198
                  }
                ],
                "declare": false,
                "start": 164,
                "end": 199
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
                      "name": "customIsArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 227
                    },
                    "init": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 234
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "superisArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 238,
                          "end": 250
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 251,
                            "end": 254
                          }
                        ],
                        "optional": false,
                        "start": 238,
                        "end": 255
                      },
                      "id": null,
                      "generator": false,
                      "start": 230,
                      "end": 255
                    },
                    "definite": false,
                    "start": 214,
                    "end": 255
                  }
                ],
                "declare": false,
                "start": 208,
                "end": 256
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 265,
                      "end": 269
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 277
                    },
                    "optional": false,
                    "computed": false,
                    "start": 265,
                    "end": 277
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "customIsArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 293
                  },
                  "start": 265,
                  "end": 293
                },
                "directive": null,
                "start": 265,
                "end": 294
              }
            ],
            "start": 147,
            "end": 300
          }
        ],
        "start": 141,
        "end": 302
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 302
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
            "name": "ElementsArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 317
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 325
          },
          "optional": false,
          "computed": false,
          "start": 304,
          "end": 325
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementsArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 343
            },
            "typeArguments": null,
            "arguments": [],
            "start": 326,
            "end": 345
          }
        ],
        "optional": false,
        "start": 304,
        "end": 346
      },
      "directive": null,
      "start": 304,
      "end": 347
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 347
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 40,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 79,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "ElementsArray",
    "start": 113,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 127,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 164,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "superisArray",
    "start": 170,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 185,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 191,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 208,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "customIsArray",
    "start": 214,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 235,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "superisArray",
    "start": 238,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 270,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "customIsArray",
    "start": 280,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "ElementsArray",
    "start": 304,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 318,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "ElementsArray",
    "start": 330,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  }
]
```
