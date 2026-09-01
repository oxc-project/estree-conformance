__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 29
          }
        ],
        "start": 12,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 46
                },
                "typeArguments": null,
                "start": 45,
                "end": 46
              },
              "start": 43,
              "end": 46
            },
            "start": 36,
            "end": 46
          },
          "init": null,
          "definite": true,
          "start": 36,
          "end": 46
        }
      ],
      "declare": false,
      "start": 32,
      "end": 47
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                "typeArguments": null,
                "start": 62,
                "end": 63
              },
              "start": 60,
              "end": 63
            },
            "start": 52,
            "end": 63
          },
          "init": null,
          "definite": true,
          "start": 52,
          "end": 63
        }
      ],
      "declare": false,
      "start": 48,
      "end": 64
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 78
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "RegExp",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 96
          },
          "start": 72,
          "end": 96
        },
        "prefix": true,
        "start": 70,
        "end": 97
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 111
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "result2",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 121
              },
              "start": 105,
              "end": 121
            },
            "directive": null,
            "start": 105,
            "end": 122
          }
        ],
        "start": 99,
        "end": 124
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 141
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 148
            },
            "optional": false,
            "computed": false,
            "start": 135,
            "end": 148
          },
          "prefix": true,
          "start": 134,
          "end": 148
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [],
          "start": 150,
          "end": 153
        },
        "alternate": null,
        "start": 130,
        "end": 153
      },
      "start": 66,
      "end": 153
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OnChanges",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 196
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onChanges",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 212
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "changes",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 228
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 229,
                          "end": 235
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 237,
                          "end": 244
                        }
                      ],
                      "start": 228,
                      "end": 245
                    },
                    "start": 222,
                    "end": 245
                  },
                  "start": 220,
                  "end": 245
                },
                "start": 213,
                "end": 245
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 248,
                "end": 252
              },
              "start": 246,
              "end": 252
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 203,
            "end": 252
          }
        ],
        "start": 197,
        "end": 254
      },
      "declare": false,
      "start": 177,
      "end": 254
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validator",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 274
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "validate",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 289
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 293,
                    "end": 297
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 306
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 307,
                          "end": 313
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 315,
                          "end": 322
                        }
                      ],
                      "start": 306,
                      "end": 323
                    },
                    "start": 300,
                    "end": 323
                  }
                ],
                "start": 293,
                "end": 323
              },
              "start": 291,
              "end": 323
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 281,
            "end": 324
          }
        ],
        "start": 275,
        "end": 326
      },
      "declare": false,
      "start": 255,
      "end": 326
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
        "start": 334,
        "end": 335
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
              "name": "validate",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 350
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
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 370,
                      "end": 372
                    },
                    "start": 363,
                    "end": 372
                  }
                ],
                "start": 353,
                "end": 378
              },
              "expression": false,
              "start": 350,
              "end": 378
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 342,
            "end": 378
          }
        ],
        "start": 336,
        "end": 380
      },
      "abstract": false,
      "declare": false,
      "start": 328,
      "end": 380
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 394
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
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
                            "name": "Validator",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 410,
                            "end": 419
                          },
                          "typeArguments": null,
                          "start": 410,
                          "end": 419
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Partial",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 422,
                            "end": 429
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OnChanges",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 430,
                                  "end": 439
                                },
                                "typeArguments": null,
                                "start": 430,
                                "end": 439
                              }
                            ],
                            "start": 429,
                            "end": 440
                          },
                          "start": 422,
                          "end": 440
                        }
                      ],
                      "start": 410,
                      "end": 440
                    },
                    "start": 408,
                    "end": 440
                  },
                  "start": 407,
                  "end": 440
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 443,
                    "end": 447
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 451,
                    "end": 454
                  },
                  "start": 443,
                  "end": 454
                },
                "definite": false,
                "start": 407,
                "end": 454
              }
            ],
            "declare": false,
            "start": 403,
            "end": 455
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 465
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 478
              },
              "start": 464,
              "end": 478
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 491
                  },
                  "directive": null,
                  "start": 490,
                  "end": 491
                }
              ],
              "start": 480,
              "end": 535
            },
            "alternate": null,
            "start": 460,
            "end": 535
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 541
            },
            "directive": null,
            "start": 540,
            "end": 541
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 827
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "onChanges",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 837
              },
              "optional": false,
              "computed": false,
              "start": 826,
              "end": 837
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 849,
                        "end": 850
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onChanges",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 851,
                        "end": 860
                      },
                      "optional": false,
                      "computed": false,
                      "start": 849,
                      "end": 860
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 861,
                        "end": 863
                      }
                    ],
                    "optional": false,
                    "start": 849,
                    "end": 864
                  },
                  "directive": null,
                  "start": 849,
                  "end": 865
                }
              ],
              "start": 839,
              "end": 871
            },
            "alternate": null,
            "start": 822,
            "end": 871
          }
        ],
        "start": 397,
        "end": 873
      },
      "expression": false,
      "start": 382,
      "end": 873
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 874
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 48,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 52,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 72,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 79,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 90,
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
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 114,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 125,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 177,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "OnChanges",
    "start": 187,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "onChanges",
    "start": 203,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "changes",
    "start": 213,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 237,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 255,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 265,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 281,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Null",
    "value": "null",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 315,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 328,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 342,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 363,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 382,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 403,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 410,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 422,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "OnChanges",
    "start": 430,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442
  },
  {
    "type": "Null",
    "value": "null",
    "start": 443,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 448,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 451,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 460,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 466,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 822,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "onChanges",
    "start": 828,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "onChanges",
    "start": 851,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  }
]
```
