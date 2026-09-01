__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Installer",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 18
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 28,
                  "end": 32
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 37
                },
                "optional": false,
                "computed": false,
                "start": 28,
                "end": 37
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 40,
                "end": 41
              },
              "start": 28,
              "end": 41
            },
            "directive": null,
            "start": 28,
            "end": 41
          }
        ],
        "start": 22,
        "end": 43
      },
      "expression": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Installer",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 53
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 63
            },
            "optional": false,
            "computed": false,
            "start": 44,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "loadArgMetadata",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 79
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 79
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 96
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 164
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
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
                              "start": 179,
                              "end": 183
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 184,
                              "end": 188
                            },
                            "optional": false,
                            "computed": false,
                            "start": 179,
                            "end": 188
                          },
                          "right": {
                            "type": "Literal",
                            "value": "hi",
                            "raw": "'hi'",
                            "start": 191,
                            "end": 195
                          },
                          "start": 179,
                          "end": 195
                        },
                        "directive": null,
                        "start": 179,
                        "end": 195
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
                              "start": 204,
                              "end": 208
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "newProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 209,
                              "end": 220
                            },
                            "optional": false,
                            "computed": false,
                            "start": 204,
                            "end": 220
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 223,
                            "end": 224
                          },
                          "start": 204,
                          "end": 224
                        },
                        "directive": null,
                        "start": 204,
                        "end": 224
                      }
                    ],
                    "start": 169,
                    "end": 230
                  },
                  "id": null,
                  "generator": false,
                  "start": 159,
                  "end": 230
                },
                "directive": null,
                "start": 159,
                "end": 230
              }
            ],
            "start": 98,
            "end": 232
          },
          "expression": false,
          "start": 82,
          "end": 232
        },
        "start": 44,
        "end": 232
      },
      "directive": null,
      "start": 44,
      "end": 232
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 238
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Installer",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 254
            },
            "typeArguments": null,
            "arguments": [],
            "start": 241,
            "end": 256
          },
          "definite": false,
          "start": 237,
          "end": 256
        }
      ],
      "declare": false,
      "start": 233,
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
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 258
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "newProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 270
          },
          "optional": false,
          "computed": false,
          "start": 257,
          "end": 270
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 274
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 273,
          "end": 279
        },
        "start": 257,
        "end": 279
      },
      "directive": null,
      "start": 257,
      "end": 279
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 316
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Installer",
    "start": 9,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Installer",
    "start": 44,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 54,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "loadArgMetadata",
    "start": 64,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 191,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "newProperty",
    "start": 209,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "Installer",
    "start": 245,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "newProperty",
    "start": 259,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 275,
    "end": 279
  }
]
```
