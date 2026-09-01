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
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "stringParts",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TemplateStringsArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 32,
                      "end": 52
                    },
                    "typeArguments": null,
                    "start": 32,
                    "end": 52
                  },
                  "start": 30,
                  "end": 52
                },
                "start": 19,
                "end": 52
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 61
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 63,
                      "end": 70
                    },
                    "start": 63,
                    "end": 72
                  },
                  "start": 61,
                  "end": 72
                },
                "value": null,
                "start": 54,
                "end": 72
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 76
                },
                "typeArguments": null,
                "start": 75,
                "end": 76
              },
              "start": 73,
              "end": 76
            },
            "start": 18,
            "end": 77
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
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
                  "start": 85,
                  "end": 86
                },
                "typeArguments": null,
                "start": 85,
                "end": 86
              },
              "start": 83,
              "end": 86
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 87
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
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
                  "start": 95,
                  "end": 96
                },
                "typeArguments": null,
                "start": 95,
                "end": 96
              },
              "start": 93,
              "end": 96
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 97
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 108
            },
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
                  "start": 110,
                  "end": 111
                },
                "typeArguments": null,
                "start": 110,
                "end": 111
              },
              "start": 108,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 102,
            "end": 112
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "thisIsNotATag",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 130
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 134,
                    "end": 140
                  },
                  "start": 132,
                  "end": 140
                },
                "start": 131,
                "end": 140
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 143,
                "end": 147
              },
              "start": 141,
              "end": 147
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 117,
            "end": 147
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 156,
                    "end": 162
                  },
                  "start": 154,
                  "end": 162
                },
                "start": 153,
                "end": 162
              }
            ],
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
                  "start": 165,
                  "end": 166
                },
                "typeArguments": null,
                "start": 165,
                "end": 166
              },
              "start": 163,
              "end": 166
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 152,
            "end": 167
          }
        ],
        "start": 12,
        "end": 169
      },
      "declare": false,
      "start": 0,
      "end": 169
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
            "name": "f",
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
                  "start": 186,
                  "end": 187
                },
                "typeArguments": null,
                "start": 186,
                "end": 187
              },
              "start": 184,
              "end": 187
            },
            "start": 183,
            "end": 187
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 187
        }
      ],
      "declare": true,
      "start": 171,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 190,
          "end": 191
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": true,
              "start": 192,
              "end": 197
            }
          ],
          "expressions": [],
          "start": 192,
          "end": 197
        },
        "start": 190,
        "end": 197
      },
      "directive": null,
      "start": 190,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 200
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 201,
              "end": 207
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 208,
              "end": 214
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 215,
              "end": 220
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 207,
              "end": 208
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 214,
              "end": 215
            }
          ],
          "start": 201,
          "end": 220
        },
        "start": 199,
        "end": 220
      },
      "directive": null,
      "start": 199,
      "end": 221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 224
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 225,
                "end": 230
              }
            ],
            "expressions": [],
            "start": 225,
            "end": 230
          },
          "start": 223,
          "end": 230
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 237
        },
        "optional": false,
        "computed": false,
        "start": 223,
        "end": 237
      },
      "directive": null,
      "start": 223,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 240
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 241,
                "end": 247
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 248,
                "end": 254
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 255,
                "end": 260
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 247,
                "end": 248
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 254,
                "end": 255
              }
            ],
            "start": 241,
            "end": 260
          },
          "start": 239,
          "end": 260
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 267
        },
        "optional": false,
        "computed": false,
        "start": 239,
        "end": 267
      },
      "directive": null,
      "start": 239,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 271
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 272,
                "end": 277
              }
            ],
            "expressions": [],
            "start": 272,
            "end": 277
          },
          "start": 270,
          "end": 277
        },
        "property": {
          "type": "Literal",
          "value": "member",
          "raw": "\"member\"",
          "start": 278,
          "end": 286
        },
        "optional": false,
        "computed": true,
        "start": 270,
        "end": 287
      },
      "directive": null,
      "start": 270,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 291
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 292,
                "end": 298
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 299,
                "end": 305
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 306,
                "end": 311
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 298,
                "end": 299
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 305,
                "end": 306
              }
            ],
            "start": 292,
            "end": 311
          },
          "start": 290,
          "end": 311
        },
        "property": {
          "type": "Literal",
          "value": "member",
          "raw": "\"member\"",
          "start": 312,
          "end": 320
        },
        "optional": false,
        "computed": true,
        "start": 290,
        "end": 321
      },
      "directive": null,
      "start": 290,
      "end": 322
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 325
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": true,
                    "start": 326,
                    "end": 331
                  }
                ],
                "expressions": [],
                "start": 326,
                "end": 331
              },
              "start": 324,
              "end": 331
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 332,
              "end": 333
            },
            "optional": false,
            "computed": true,
            "start": 324,
            "end": 334
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "member",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 341
          },
          "optional": false,
          "computed": false,
          "start": 324,
          "end": 341
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 342,
              "end": 348
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 349,
              "end": 355
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 356,
              "end": 361
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 348,
              "end": 349
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 355,
              "end": 356
            }
          ],
          "start": 342,
          "end": 361
        },
        "start": 324,
        "end": 361
      },
      "directive": null,
      "start": 324,
      "end": 362
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 365
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false,
                    "start": 366,
                    "end": 372
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false,
                    "start": 373,
                    "end": 379
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "ghi",
                      "cooked": "ghi"
                    },
                    "tail": true,
                    "start": 380,
                    "end": 385
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 372,
                    "end": 373
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 379,
                    "end": 380
                  }
                ],
                "start": 366,
                "end": 385
              },
              "start": 364,
              "end": 385
            },
            "property": {
              "type": "Literal",
              "value": "member",
              "raw": "\"member\"",
              "start": 386,
              "end": 394
            },
            "optional": false,
            "computed": true,
            "start": 364,
            "end": 395
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "member",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 402
          },
          "optional": false,
          "computed": false,
          "start": 364,
          "end": 402
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 403,
              "end": 409
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 410,
              "end": 416
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 417,
              "end": 422
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 409,
              "end": 410
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 416,
              "end": 417
            }
          ],
          "start": 403,
          "end": 422
        },
        "start": 364,
        "end": 422
      },
      "directive": null,
      "start": 364,
      "end": 423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 426
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false,
                    "start": 427,
                    "end": 433
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false,
                    "start": 439,
                    "end": 445
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "ghi",
                      "cooked": "ghi"
                    },
                    "tail": true,
                    "start": 451,
                    "end": 456
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 434,
                    "end": 438
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 446,
                    "end": 450
                  }
                ],
                "start": 427,
                "end": 456
              },
              "start": 425,
              "end": 456
            },
            "property": {
              "type": "Literal",
              "value": "member",
              "raw": "\"member\"",
              "start": 457,
              "end": 465
            },
            "optional": false,
            "computed": true,
            "start": 425,
            "end": 466
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "member",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 473
          },
          "optional": false,
          "computed": false,
          "start": 425,
          "end": 473
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 474,
              "end": 480
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 483,
              "end": 489
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 492,
              "end": 497
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 481,
              "end": 482
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 490,
              "end": 491
            }
          ],
          "start": 474,
          "end": 497
        },
        "start": 425,
        "end": 497
      },
      "directive": null,
      "start": 425,
      "end": 498
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 501
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 515
          },
          "optional": false,
          "computed": false,
          "start": 500,
          "end": 515
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 516,
                "end": 521
              }
            ],
            "expressions": [],
            "start": 516,
            "end": 521
          }
        ],
        "optional": false,
        "start": 500,
        "end": 522
      },
      "directive": null,
      "start": 500,
      "end": 523
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 525,
            "end": 526
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 540
          },
          "optional": false,
          "computed": false,
          "start": 525,
          "end": 540
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 541,
                "end": 547
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 548,
                "end": 554
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 555,
                "end": 560
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 547,
                "end": 548
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 554,
                "end": 555
              }
            ],
            "start": 541,
            "end": 560
          }
        ],
        "optional": false,
        "start": 525,
        "end": 561
      },
      "directive": null,
      "start": 525,
      "end": 562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 562
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
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "stringParts",
    "start": 19,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 32,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "type": "Identifier",
    "value": "member",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "thisIsNotATag",
    "start": 117,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 171,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 190,
    "end": 191
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 192,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 199,
    "end": 200
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 201,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 207,
    "end": 208
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 208,
    "end": 214
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 214,
    "end": 215
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 223,
    "end": 224
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 231,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 239,
    "end": 240
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 241,
    "end": 247
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 247,
    "end": 248
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 248,
    "end": 254
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 254,
    "end": 255
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 270,
    "end": 271
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 277,
    "end": 278
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 278,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 290,
    "end": 291
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 292,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 298,
    "end": 299
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 299,
    "end": 305
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 305,
    "end": 306
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 311,
    "end": 312
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 312,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 324,
    "end": 325
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 326,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 331,
    "end": 332
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 335,
    "end": 341
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 342,
    "end": 348
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 348,
    "end": 349
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 349,
    "end": 355
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 355,
    "end": 356
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 364,
    "end": 365
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 366,
    "end": 372
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 372,
    "end": 373
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 373,
    "end": 379
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 379,
    "end": 380
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 380,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 385,
    "end": 386
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 386,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 396,
    "end": 402
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 403,
    "end": 409
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 409,
    "end": 410
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 410,
    "end": 416
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 416,
    "end": 417
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 425,
    "end": 426
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 427,
    "end": 433
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 434,
    "end": 438
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 439,
    "end": 445
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 446,
    "end": 450
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 451,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 456,
    "end": 457
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 457,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 467,
    "end": 473
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 474,
    "end": 480
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 481,
    "end": 482
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 483,
    "end": 489
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 490,
    "end": 491
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 492,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "thisIsNotATag",
    "start": 502,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 516,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "thisIsNotATag",
    "start": 527,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 541,
    "end": 547
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 547,
    "end": 548
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 548,
    "end": 554
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 554,
    "end": 555
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 555,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  }
]
```
