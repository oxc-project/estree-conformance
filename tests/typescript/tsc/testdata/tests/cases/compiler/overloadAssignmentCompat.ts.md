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
        "name": "Accessor",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 94
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 95,
        "end": 97
      },
      "abstract": false,
      "declare": false,
      "start": 80,
      "end": 97
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 112
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            },
            "start": 117,
            "end": 125
          },
          "start": 113,
          "end": 125
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 128,
          "end": 134
        },
        "start": 126,
        "end": 134
      },
      "body": null,
      "expression": false,
      "start": 99,
      "end": 135
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 149
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 156,
              "end": 162
            },
            "start": 154,
            "end": 162
          },
          "start": 150,
          "end": 162
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 171,
              "end": 177
            },
            "start": 169,
            "end": 177
          },
          "start": 164,
          "end": 177
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 188
          },
          "typeArguments": null,
          "start": 180,
          "end": 188
        },
        "start": 178,
        "end": 188
      },
      "body": null,
      "expression": false,
      "start": 136,
      "end": 189
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 203
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 209,
              "end": 212
            },
            "start": 207,
            "end": 212
          },
          "start": 204,
          "end": 212
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 223
          },
          "typeArguments": null,
          "start": 215,
          "end": 223
        },
        "start": 213,
        "end": 223
      },
      "body": null,
      "expression": false,
      "start": 190,
      "end": 224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 238
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nameOrMap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 250,
              "end": 253
            },
            "start": 248,
            "end": 253
          },
          "start": 239,
          "end": 253
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 263,
              "end": 269
            },
            "start": 261,
            "end": 269
          },
          "start": 255,
          "end": 269
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 272,
          "end": 275
        },
        "start": 270,
        "end": 275
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameOrMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 295
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameOrMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 315
                  },
                  "prefix": true,
                  "start": 299,
                  "end": 315
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "\"object\"",
                  "start": 320,
                  "end": 328
                },
                "start": 299,
                "end": 328
              },
              "start": 286,
              "end": 328
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Accessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 378,
                      "end": 386
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 374,
                    "end": 386
                  },
                  "start": 367,
                  "end": 387
                }
              ],
              "start": 330,
              "end": 393
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "s",
                    "raw": "\"s\"",
                    "start": 450,
                    "end": 453
                  },
                  "start": 443,
                  "end": 454
                }
              ],
              "start": 403,
              "end": 460
            },
            "start": 282,
            "end": 460
          }
        ],
        "start": 276,
        "end": 462
      },
      "expression": false,
      "start": 225,
      "end": 462
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null,
        "start": 520,
        "end": 525
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 532,
              "end": 538
            },
            "start": 530,
            "end": 538
          },
          "start": 526,
          "end": 538
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 541,
          "end": 547
        },
        "start": 539,
        "end": 547
      },
      "body": null,
      "expression": false,
      "start": 511,
      "end": 548
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 563
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 570,
              "end": 576
            },
            "start": 568,
            "end": 576
          },
          "start": 564,
          "end": 576
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 585,
              "end": 591
            },
            "start": 583,
            "end": 591
          },
          "start": 578,
          "end": 591
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 594,
            "end": 602
          },
          "typeArguments": null,
          "start": 594,
          "end": 602
        },
        "start": 592,
        "end": 602
      },
      "body": null,
      "expression": false,
      "start": 549,
      "end": 603
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 618
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 624,
              "end": 627
            },
            "start": 622,
            "end": 627
          },
          "start": 619,
          "end": 627
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 638
          },
          "typeArguments": null,
          "start": 630,
          "end": 638
        },
        "start": 628,
        "end": 638
      },
      "body": null,
      "expression": false,
      "start": 604,
      "end": 639
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr2",
        "optional": false,
        "typeAnnotation": null,
        "start": 649,
        "end": 654
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nameOrMap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 666,
              "end": 669
            },
            "start": 664,
            "end": 669
          },
          "start": 655,
          "end": 669
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 679,
              "end": 685
            },
            "start": 677,
            "end": 685
          },
          "start": 671,
          "end": 685
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 688,
          "end": 694
        },
        "start": 686,
        "end": 694
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameOrMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 714
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameOrMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 734
                  },
                  "prefix": true,
                  "start": 718,
                  "end": 734
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "\"object\"",
                  "start": 739,
                  "end": 747
                },
                "start": 718,
                "end": 747
              },
              "start": 705,
              "end": 747
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "t",
                    "raw": "\"t\"",
                    "start": 793,
                    "end": 796
                  },
                  "start": 786,
                  "end": 797
                }
              ],
              "start": 749,
              "end": 803
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "s",
                    "raw": "\"s\"",
                    "start": 860,
                    "end": 863
                  },
                  "start": 853,
                  "end": 864
                }
              ],
              "start": 813,
              "end": 870
            },
            "start": 701,
            "end": 870
          }
        ],
        "start": 695,
        "end": 872
      },
      "expression": false,
      "start": 640,
      "end": 872
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 935,
        "end": 938
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 941,
          "end": 947
        },
        "start": 940,
        "end": 947
      },
      "body": null,
      "expression": false,
      "start": 926,
      "end": 948
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 962
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 965,
          "end": 971
        },
        "start": 964,
        "end": 971
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 981,
              "end": 984
            },
            "start": 974,
            "end": 984
          }
        ],
        "start": 972,
        "end": 986
      },
      "expression": false,
      "start": 950,
      "end": 986
    },
    {
      "type": "EmptyStatement",
      "start": 986,
      "end": 987
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 80,
  "end": 988
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 80,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Accessor",
    "start": 86,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 99,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 136,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 150,
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
    "value": "string",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Accessor",
    "start": 180,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 190,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 204,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Accessor",
    "start": 215,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 225,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "nameOrMap",
    "start": 239,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 272,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "nameOrMap",
    "start": 286,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 296,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 299,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "nameOrMap",
    "start": 306,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 316,
    "end": 319
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 320,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 367,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 374,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "Accessor",
    "start": 378,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 443,
    "end": 449
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 511,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "attr2",
    "start": 520,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 526,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 532,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 541,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 549,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "attr2",
    "start": 558,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 578,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "Accessor",
    "start": 594,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 604,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "attr2",
    "start": 613,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Accessor",
    "start": 630,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 640,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "attr2",
    "start": 649,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "nameOrMap",
    "start": 655,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 666,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 671,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 701,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "nameOrMap",
    "start": 705,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 715,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 718,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "nameOrMap",
    "start": 725,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 735,
    "end": 738
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 739,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 749,
    "end": 750
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 786,
    "end": 792
  },
  {
    "type": "String",
    "value": "\"t\"",
    "start": 793,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 808,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 853,
    "end": 859
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 926,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 941,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 950,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 959,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 965,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 972,
    "end": 973
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 974,
    "end": 980
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 981,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  }
]
```
