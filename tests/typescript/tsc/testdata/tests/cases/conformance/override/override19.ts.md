__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": true,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 31
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 33,
                "end": 36
              },
              "start": 31,
              "end": 36
            },
            "value": null,
            "start": 24,
            "end": 36
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 41,
            "end": 44
          },
          "start": 38,
          "end": 44
        },
        "start": 11,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CreateMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 74
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 88
              },
              "typeArguments": null,
              "start": 85,
              "end": 88
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 75,
            "end": 88
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 103
              },
              "typeArguments": null,
              "start": 100,
              "end": 103
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 90,
            "end": 103
          }
        ],
        "start": 74,
        "end": 104
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
              },
              "typeArguments": null,
              "start": 114,
              "end": 115
            },
            "start": 112,
            "end": 115
          },
          "start": 105,
          "end": 115
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 124
              },
              "typeArguments": null,
              "start": 123,
              "end": 124
            },
            "start": 121,
            "end": 124
          },
          "start": 117,
          "end": 124
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "typeArguments": null,
              "start": 127,
              "end": 128
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 148
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 150,
                            "end": 153
                          },
                          "start": 150,
                          "end": 155
                        },
                        "start": 148,
                        "end": 155
                      },
                      "value": null,
                      "start": 141,
                      "end": 155
                    }
                  ],
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
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 160,
                            "end": 167
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "InstanceType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 169,
                                "end": 181
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 182,
                                      "end": 183
                                    },
                                    "typeArguments": null,
                                    "start": 182,
                                    "end": 183
                                  }
                                ],
                                "start": 181,
                                "end": 184
                              },
                              "start": 169,
                              "end": 184
                            },
                            "start": 167,
                            "end": 184
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 160,
                          "end": 184
                        }
                      ],
                      "start": 158,
                      "end": 186
                    },
                    "start": 156,
                    "end": 186
                  },
                  "start": 136,
                  "end": 186
                }
              ],
              "start": 131,
              "end": 188
            }
          ],
          "start": 127,
          "end": 188
        },
        "start": 125,
        "end": 188
      },
      "body": null,
      "expression": false,
      "start": 46,
      "end": 188
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Context",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 202
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 203,
        "end": 205
      },
      "abstract": false,
      "declare": false,
      "start": 189,
      "end": 205
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 214
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
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 232
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
                "start": 235,
                "end": 237
              },
              "expression": false,
              "start": 232,
              "end": 237
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 221,
            "end": 237
          }
        ],
        "start": 215,
        "end": 239
      },
      "abstract": false,
      "declare": false,
      "start": 207,
      "end": 239
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
        "start": 247,
        "end": 248
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "CreateMixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 268
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Context",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 276
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 279
          }
        ],
        "optional": false,
        "start": 257,
        "end": 280
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 298
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
                "start": 301,
                "end": 303
              },
              "expression": false,
              "start": 298,
              "end": 303
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null,
            "start": 286,
            "end": 303
          }
        ],
        "start": 281,
        "end": 324
      },
      "abstract": false,
      "declare": false,
      "start": 241,
      "end": 324
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 332,
        "end": 333
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "CreateMixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 353
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Context",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 361
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 364
          }
        ],
        "optional": false,
        "start": 342,
        "end": 365
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
              "name": "doSomethang",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 392
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
                "start": 395,
                "end": 397
              },
              "expression": false,
              "start": 392,
              "end": 397
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null,
            "start": 372,
            "end": 397
          }
        ],
        "start": 366,
        "end": 427
      },
      "abstract": false,
      "declare": false,
      "start": 326,
      "end": 427
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 427
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 11,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 24,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 38,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 46,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 54,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "CreateMixin",
    "start": 63,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 77,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 92,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 144,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "InstanceType",
    "start": 169,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 189,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 207,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 221,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 241,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 249,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "CreateMixin",
    "start": 257,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 269,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 286,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 326,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 334,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "CreateMixin",
    "start": 342,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 354,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 372,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "doSomethang",
    "start": 381,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  }
]
```
