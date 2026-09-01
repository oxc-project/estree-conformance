__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 29
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
            },
            "initializer": null,
            "computed": false,
            "start": 32,
            "end": 35
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 40
            },
            "initializer": null,
            "computed": false,
            "start": 37,
            "end": 40
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "THREE",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 47
            },
            "initializer": null,
            "computed": false,
            "start": 42,
            "end": 47
          }
        ],
        "start": 30,
        "end": 49
      },
      "const": false,
      "declare": false,
      "start": 22,
      "end": 49
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 65
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 71
            },
            "initializer": null,
            "computed": false,
            "start": 68,
            "end": 71
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 76
            },
            "initializer": null,
            "computed": false,
            "start": 73,
            "end": 76
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "THREE",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 83
            },
            "initializer": null,
            "computed": false,
            "start": 78,
            "end": 83
          }
        ],
        "start": 66,
        "end": 85
      },
      "const": false,
      "declare": true,
      "start": 50,
      "end": 85
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bins1",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 97
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E1",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 110
          },
          "typeArguments": null,
          "start": 108,
          "end": 110
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 114,
          "end": 120
        },
        "optional": true,
        "readonly": null,
        "start": 100,
        "end": 123
      },
      "declare": false,
      "start": 87,
      "end": 123
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bins2",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 134
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 141
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 147
          },
          "typeArguments": null,
          "start": 145,
          "end": 147
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 151,
          "end": 157
        },
        "optional": true,
        "readonly": null,
        "start": 137,
        "end": 160
      },
      "declare": false,
      "start": 124,
      "end": 160
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bins1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 177
                },
                "typeArguments": null,
                "start": 172,
                "end": 177
              },
              "start": 170,
              "end": 177
            },
            "start": 168,
            "end": 177
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 180,
            "end": 182
          },
          "definite": false,
          "start": 168,
          "end": 182
        }
      ],
      "declare": false,
      "start": 162,
      "end": 183
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bins2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 199
                },
                "typeArguments": null,
                "start": 194,
                "end": 199
              },
              "start": 192,
              "end": 199
            },
            "start": 190,
            "end": 199
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 202,
            "end": 204
          },
          "definite": false,
          "start": 190,
          "end": 204
        }
      ],
      "declare": false,
      "start": 184,
      "end": 205
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 219
                },
                "typeArguments": null,
                "start": 217,
                "end": 219
              },
              "start": 215,
              "end": 219
            },
            "start": 213,
            "end": 219
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 224
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 228
            },
            "optional": false,
            "computed": false,
            "start": 222,
            "end": 228
          },
          "definite": false,
          "start": 213,
          "end": 228
        }
      ],
      "declare": false,
      "start": 207,
      "end": 229
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 242
                },
                "typeArguments": null,
                "start": 240,
                "end": 242
              },
              "start": 238,
              "end": 242
            },
            "start": 236,
            "end": 242
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 247
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 251
            },
            "optional": false,
            "computed": false,
            "start": 245,
            "end": 251
          },
          "definite": false,
          "start": 236,
          "end": 251
        }
      ],
      "declare": false,
      "start": 230,
      "end": 252
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 256
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 257,
            "end": 258
          },
          "optional": false,
          "computed": true,
          "start": 254,
          "end": 259
        },
        "right": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 262,
          "end": 265
        },
        "start": 254,
        "end": 265
      },
      "directive": null,
      "start": 254,
      "end": 266
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 272
          },
          "optional": false,
          "computed": true,
          "start": 267,
          "end": 273
        },
        "right": {
          "type": "Literal",
          "value": "b",
          "raw": "\"b\"",
          "start": 276,
          "end": 279
        },
        "start": 267,
        "end": 279
      },
      "directive": null,
      "start": 267,
      "end": 280
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 284
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 285,
            "end": 286
          },
          "optional": false,
          "computed": true,
          "start": 282,
          "end": 287
        },
        "right": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 290,
          "end": 293
        },
        "start": 282,
        "end": 293
      },
      "directive": null,
      "start": 282,
      "end": 294
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 300
          },
          "optional": false,
          "computed": true,
          "start": 295,
          "end": 301
        },
        "right": {
          "type": "Literal",
          "value": "b",
          "raw": "\"b\"",
          "start": 304,
          "end": 307
        },
        "start": 295,
        "end": 307
      },
      "directive": null,
      "start": 295,
      "end": 308
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "val",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 422
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 426,
          "end": 432
        },
        "start": 424,
        "end": 432
      },
      "body": null,
      "expression": false,
      "start": 402,
      "end": 433
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 442
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 452
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 449,
              "end": 454
            },
            "computed": false,
            "start": 445,
            "end": 454
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 457
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 463
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 460,
              "end": 465
            },
            "computed": false,
            "start": 456,
            "end": 465
          }
        ],
        "start": 443,
        "end": 467
      },
      "const": false,
      "declare": false,
      "start": 435,
      "end": 467
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N2",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 475
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 479
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 485
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 482,
              "end": 487
            },
            "computed": false,
            "start": 478,
            "end": 487
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 496
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 493,
              "end": 498
            },
            "computed": false,
            "start": 489,
            "end": 498
          }
        ],
        "start": 476,
        "end": 500
      },
      "const": false,
      "declare": false,
      "start": 468,
      "end": 500
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 507,
        "end": 509
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 515,
          "end": 516
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 522
              },
              "typeArguments": null,
              "start": 520,
              "end": 522
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 527
              },
              "typeArguments": null,
              "start": 525,
              "end": 527
            }
          ],
          "start": 520,
          "end": 527
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 531
          },
          "typeArguments": null,
          "start": 530,
          "end": 531
        },
        "optional": false,
        "readonly": null,
        "start": 512,
        "end": 533
      },
      "declare": false,
      "start": 502,
      "end": 534
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 757,
        "end": 758
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 764
            },
            "initializer": null,
            "computed": false,
            "start": 761,
            "end": 764
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 769
            },
            "initializer": null,
            "computed": false,
            "start": 766,
            "end": 769
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "THREE",
              "optional": false,
              "typeAnnotation": null,
              "start": 771,
              "end": 776
            },
            "initializer": {
              "type": "Literal",
              "value": "x",
              "raw": "'x'",
              "start": 779,
              "end": 782
            },
            "computed": false,
            "start": 771,
            "end": 782
          }
        ],
        "start": 759,
        "end": 784
      },
      "const": false,
      "declare": true,
      "start": 744,
      "end": 784
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 794,
                  "end": 795
                },
                "typeArguments": null,
                "start": 794,
                "end": 795
              },
              "start": 792,
              "end": 795
            },
            "start": 791,
            "end": 795
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 799
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 803
            },
            "optional": false,
            "computed": false,
            "start": 798,
            "end": 803
          },
          "definite": false,
          "start": 791,
          "end": 803
        }
      ],
      "declare": false,
      "start": 785,
      "end": 804
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 814,
                    "end": 815
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ONE",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 819
                  },
                  "start": 814,
                  "end": 819
                },
                "typeArguments": null,
                "start": 814,
                "end": 819
              },
              "start": 812,
              "end": 819
            },
            "start": 811,
            "end": 819
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 822,
            "end": 823
          },
          "definite": false,
          "start": 811,
          "end": 823
        }
      ],
      "declare": false,
      "start": 805,
      "end": 824
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 824
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 50,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 58,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 87,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "Bins1",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 105,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 111,
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
    "value": "string",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 124,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "Bins2",
    "start": 129,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 142,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 162,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "Bins1",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 184,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 190,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "Bins2",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 207,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 230,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 256,
    "end": 257
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 270,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 285,
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
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 290,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 295,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 298,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 402,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 410,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 426,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 435,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 440,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 468,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 473,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 493,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 502,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 517,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 744,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 752,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 761,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 766,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "THREE",
    "start": 771,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 779,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 785,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 800,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 805,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 816,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824
  }
]
```
