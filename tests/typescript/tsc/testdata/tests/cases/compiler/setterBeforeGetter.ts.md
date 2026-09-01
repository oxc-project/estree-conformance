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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "_bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 34
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 36,
                        "end": 42
                      },
                      "start": 34,
                      "end": 42
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 33,
                    "end": 43
                  }
                ],
                "start": 31,
                "end": 45
              },
              "start": 29,
              "end": 45
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 17,
            "end": 46
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
              "start": 108,
              "end": 111
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 121,
                            "end": 122
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 124,
                              "end": 130
                            },
                            "start": 122,
                            "end": 130
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 121,
                          "end": 131
                        }
                      ],
                      "start": 119,
                      "end": 133
                    },
                    "start": 117,
                    "end": 133
                  },
                  "start": 112,
                  "end": 133
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
                          "start": 145,
                          "end": 149
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 154
                        },
                        "optional": false,
                        "computed": false,
                        "start": 145,
                        "end": 154
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 162
                      },
                      "start": 145,
                      "end": 162
                    },
                    "directive": null,
                    "start": 145,
                    "end": 163
                  }
                ],
                "start": 135,
                "end": 169
              },
              "expression": false,
              "start": 111,
              "end": 169
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 104,
            "end": 169
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
              "start": 178,
              "end": 181
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 188
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 190,
                          "end": 196
                        },
                        "start": 188,
                        "end": 196
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 187,
                      "end": 197
                    }
                  ],
                  "start": 185,
                  "end": 199
                },
                "start": 183,
                "end": 199
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 217,
                        "end": 221
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 226
                      },
                      "optional": false,
                      "computed": false,
                      "start": 217,
                      "end": 226
                    },
                    "start": 210,
                    "end": 227
                  }
                ],
                "start": 200,
                "end": 233
              },
              "expression": false,
              "start": 181,
              "end": 233
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 174,
            "end": 233
          }
        ],
        "start": 10,
        "end": 235
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 235
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 235
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
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 17,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "_bar",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "_bar",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 174,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
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
    "value": "a",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 210,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "_bar",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  }
]
```
