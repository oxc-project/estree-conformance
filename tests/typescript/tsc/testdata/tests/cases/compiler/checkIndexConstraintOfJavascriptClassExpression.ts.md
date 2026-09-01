__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 12
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "BaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 31
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Literal",
                    "value": "use strict",
                    "raw": "'use strict'",
                    "start": 39,
                    "end": 51
                  },
                  "directive": "use strict",
                  "start": 39,
                  "end": 52
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
                        "name": "DEFAULT_MESSAGE",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 78
                      },
                      "init": {
                        "type": "Literal",
                        "value": "nop!",
                        "raw": "\"nop!\"",
                        "start": 81,
                        "end": 87
                      },
                      "definite": false,
                      "start": 63,
                      "end": 87
                    }
                  ],
                  "declare": false,
                  "start": 57,
                  "end": 88
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Hello",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 99,
                    "end": 104
                  },
                  "typeParameters": null,
                  "superClass": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BaseClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 122
                  },
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
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 133,
                          "end": 144
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Super",
                                    "start": 161,
                                    "end": 166
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 161,
                                  "end": 168
                                },
                                "directive": null,
                                "start": 161,
                                "end": 169
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
                                      "start": 182,
                                      "end": 186
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 187,
                                      "end": 190
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 182,
                                    "end": 190
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "bar",
                                    "raw": "\"bar\"",
                                    "start": 193,
                                    "end": 198
                                  },
                                  "start": 182,
                                  "end": 198
                                },
                                "directive": null,
                                "start": 182,
                                "end": 199
                              }
                            ],
                            "start": 147,
                            "end": 209
                          },
                          "expression": false,
                          "start": 144,
                          "end": 209
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 133,
                        "end": 209
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_render",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 218,
                          "end": 225
                        },
                        "value": {
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
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 226,
                              "end": 231
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
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
                                      "name": "message",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 253,
                                      "end": 260
                                    },
                                    "init": {
                                      "type": "LogicalExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "error",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 263,
                                          "end": 268
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "message",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 269,
                                          "end": 276
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 263,
                                        "end": 276
                                      },
                                      "operator": "||",
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "DEFAULT_MESSAGE",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 280,
                                        "end": 295
                                      },
                                      "start": 263,
                                      "end": 295
                                    },
                                    "definite": false,
                                    "start": 253,
                                    "end": 295
                                  }
                                ],
                                "declare": false,
                                "start": 247,
                                "end": 296
                              }
                            ],
                            "start": 233,
                            "end": 306
                          },
                          "expression": false,
                          "start": 225,
                          "end": 306
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 218,
                        "end": 306
                      }
                    ],
                    "start": 123,
                    "end": 312
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 93,
                  "end": 312
                }
              ],
              "start": 33,
              "end": 314
            },
            "expression": false,
            "start": 13,
            "end": 314
          }
        ],
        "optional": false,
        "start": 0,
        "end": 315
      },
      "directive": null,
      "start": 0,
      "end": 316
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
    "type": "Identifier",
    "value": "someFunction",
    "start": 0,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 22,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "String",
    "value": "'use strict'",
    "start": 39,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "DEFAULT_MESSAGE",
    "start": 63,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "String",
    "value": "\"nop!\"",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "Hello",
    "start": 99,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 105,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 113,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 133,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "_render",
    "start": 218,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 247,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 253,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 269,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 277,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "DEFAULT_MESSAGE",
    "start": 280,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  }
]
```
