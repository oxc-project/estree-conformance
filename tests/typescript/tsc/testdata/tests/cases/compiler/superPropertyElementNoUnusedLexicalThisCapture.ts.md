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
        "start": 6,
        "end": 7
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
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
                "body": [],
                "start": 14,
                "end": 16
              },
              "expression": false,
              "start": 11,
              "end": 16
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 10,
            "end": 16
          }
        ],
        "start": 8,
        "end": 18
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 18
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
        "start": 26,
        "end": 27
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
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
              "start": 44,
              "end": 55
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
                        "start": 68,
                        "end": 73
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 68,
                      "end": 75
                    },
                    "directive": null,
                    "start": 68,
                    "end": 76
                  }
                ],
                "start": 58,
                "end": 82
              },
              "expression": false,
              "start": 55,
              "end": 82
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 44,
            "end": 82
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 90
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 130,
                                "end": 135
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 136,
                                "end": 137
                              },
                              "optional": false,
                              "computed": false,
                              "start": 130,
                              "end": 137
                            },
                            "directive": null,
                            "start": 130,
                            "end": 138
                          }
                        ],
                        "start": 116,
                        "end": 148
                      },
                      "id": null,
                      "generator": false,
                      "start": 110,
                      "end": 148
                    },
                    "start": 103,
                    "end": 148
                  }
                ],
                "start": 93,
                "end": 154
              },
              "expression": false,
              "start": 90,
              "end": 154
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 87,
            "end": 154
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 162
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 202,
                                "end": 207
                              },
                              "property": {
                                "type": "Literal",
                                "value": "x",
                                "raw": "\"x\"",
                                "start": 208,
                                "end": 211
                              },
                              "optional": false,
                              "computed": true,
                              "start": 202,
                              "end": 212
                            },
                            "directive": null,
                            "start": 202,
                            "end": 213
                          }
                        ],
                        "start": 188,
                        "end": 223
                      },
                      "id": null,
                      "generator": false,
                      "start": 182,
                      "end": 223
                    },
                    "start": 175,
                    "end": 223
                  }
                ],
                "start": 165,
                "end": 229
              },
              "expression": false,
              "start": 162,
              "end": 229
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 159,
            "end": 229
          }
        ],
        "start": 38,
        "end": 231
      },
      "abstract": false,
      "declare": false,
      "start": 20,
      "end": 231
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 231
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
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 20,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 28,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 44,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 68,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 87,
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
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 207,
    "end": 208
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  }
]
```
