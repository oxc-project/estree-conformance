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
        "name": "Comment",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
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
              "name": "getDocCommentText",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 45
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
                "start": 52,
                "end": 60
              },
              "expression": false,
              "start": 45,
              "end": 60
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 21,
            "end": 60
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getDocCommentText",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 90
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
                  "name": "comments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Comment",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 108
                        },
                        "typeArguments": null,
                        "start": 101,
                        "end": 108
                      },
                      "start": 101,
                      "end": 110
                    },
                    "start": 99,
                    "end": 110
                  },
                  "start": 91,
                  "end": 110
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "comments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 126,
                            "end": 134
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 135,
                            "end": 136
                          },
                          "optional": false,
                          "computed": true,
                          "start": 126,
                          "end": 137
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getDocCommentText",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 155
                        },
                        "optional": false,
                        "computed": false,
                        "start": 126,
                        "end": 155
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 126,
                      "end": 157
                    },
                    "directive": null,
                    "start": 126,
                    "end": 158
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Comment",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 174,
                                "end": 181
                              },
                              "typeArguments": null,
                              "start": 174,
                              "end": 181
                            },
                            "start": 172,
                            "end": 181
                          },
                          "start": 171,
                          "end": 181
                        },
                        "init": null,
                        "definite": false,
                        "start": 171,
                        "end": 181
                      }
                    ],
                    "declare": false,
                    "start": 167,
                    "end": 182
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 192
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getDocCommentText",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 210
                        },
                        "optional": false,
                        "computed": false,
                        "start": 191,
                        "end": 210
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 191,
                      "end": 212
                    },
                    "directive": null,
                    "start": 191,
                    "end": 213
                  }
                ],
                "start": 116,
                "end": 219
              },
              "expression": false,
              "start": 90,
              "end": 219
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 66,
            "end": 219
          }
        ],
        "start": 14,
        "end": 221
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 221
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 221
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
    "value": "Comment",
    "start": 6,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 21,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "getDocCommentText",
    "start": 28,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 66,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "getDocCommentText",
    "start": 73,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "comments",
    "start": 91,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Comment",
    "start": 101,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "comments",
    "start": 126,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "getDocCommentText",
    "start": 138,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 167,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Comment",
    "start": 174,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "getDocCommentText",
    "start": 193,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  }
]
```
