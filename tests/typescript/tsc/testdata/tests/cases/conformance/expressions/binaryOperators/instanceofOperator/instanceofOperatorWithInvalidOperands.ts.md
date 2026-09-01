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
        "name": "C",
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 17
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
                "start": 20,
                "end": 23
              },
              "expression": false,
              "start": 17,
              "end": 23
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 23
          }
        ],
        "start": 8,
        "end": 25
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 25
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 34,
                "end": 37
              },
              "start": 32,
              "end": 37
            },
            "start": 31,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 37
        }
      ],
      "declare": false,
      "start": 27,
      "end": 38
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 172,
                "end": 178
              },
              "start": 170,
              "end": 178
            },
            "start": 168,
            "end": 178
          },
          "init": null,
          "definite": false,
          "start": 168,
          "end": 178
        }
      ],
      "declare": true,
      "start": 156,
      "end": 179
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 196,
                "end": 203
              },
              "start": 194,
              "end": 203
            },
            "start": 192,
            "end": 203
          },
          "init": null,
          "definite": false,
          "start": 192,
          "end": 203
        }
      ],
      "declare": true,
      "start": 180,
      "end": 204
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 221,
                "end": 227
              },
              "start": 219,
              "end": 227
            },
            "start": 217,
            "end": 227
          },
          "init": null,
          "definite": false,
          "start": 217,
          "end": 227
        }
      ],
      "declare": true,
      "start": 205,
      "end": 228
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 237,
                "end": 241
              },
              "start": 235,
              "end": 241
            },
            "start": 233,
            "end": 241
          },
          "init": null,
          "definite": false,
          "start": 233,
          "end": 241
        }
      ],
      "declare": false,
      "start": 229,
      "end": 242
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
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 251
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 256
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 269
            },
            "start": 254,
            "end": 269
          },
          "definite": false,
          "start": 248,
          "end": 269
        }
      ],
      "declare": false,
      "start": 244,
      "end": 270
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
            "name": "ra2",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 278
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 283
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 296
            },
            "start": 281,
            "end": 296
          },
          "definite": false,
          "start": 275,
          "end": 296
        }
      ],
      "declare": false,
      "start": 271,
      "end": 297
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
            "name": "ra3",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 305
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 310
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 323
            },
            "start": 308,
            "end": 323
          },
          "definite": false,
          "start": 302,
          "end": 323
        }
      ],
      "declare": false,
      "start": 298,
      "end": 324
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
            "name": "ra4",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 332
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 337
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
            },
            "start": 335,
            "end": 350
          },
          "definite": false,
          "start": 329,
          "end": 350
        }
      ],
      "declare": false,
      "start": 325,
      "end": 351
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
            "name": "ra5",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 359
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 362,
              "end": 363
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 376
            },
            "start": 362,
            "end": 376
          },
          "definite": false,
          "start": 356,
          "end": 376
        }
      ],
      "declare": false,
      "start": 352,
      "end": 377
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
            "name": "ra6",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 385
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 388,
              "end": 392
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "start": 388,
            "end": 405
          },
          "definite": false,
          "start": 382,
          "end": 405
        }
      ],
      "declare": false,
      "start": 378,
      "end": 406
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
            "name": "ra7",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 414
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 417,
              "end": 419
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 432
            },
            "start": 417,
            "end": 432
          },
          "definite": false,
          "start": 411,
          "end": 432
        }
      ],
      "declare": false,
      "start": 407,
      "end": 433
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
            "name": "ra8",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 441
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 444,
              "end": 448
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 461
            },
            "start": 444,
            "end": 461
          },
          "definite": false,
          "start": 438,
          "end": 461
        }
      ],
      "declare": false,
      "start": 434,
      "end": 462
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
            "name": "ra9",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 470
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 482
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 495
            },
            "start": 473,
            "end": 495
          },
          "definite": false,
          "start": 467,
          "end": 495
        }
      ],
      "declare": false,
      "start": 463,
      "end": 496
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 624,
                "end": 630
              },
              "start": 622,
              "end": 630
            },
            "start": 620,
            "end": 630
          },
          "init": null,
          "definite": false,
          "start": 620,
          "end": 630
        }
      ],
      "declare": true,
      "start": 608,
      "end": 631
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 648,
                "end": 655
              },
              "start": 646,
              "end": 655
            },
            "start": 644,
            "end": 655
          },
          "init": null,
          "definite": false,
          "start": 644,
          "end": 655
        }
      ],
      "declare": true,
      "start": 632,
      "end": 656
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 673,
                "end": 679
              },
              "start": 671,
              "end": 679
            },
            "start": 669,
            "end": 679
          },
          "init": null,
          "definite": false,
          "start": 669,
          "end": 679
        }
      ],
      "declare": true,
      "start": 657,
      "end": 680
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 697,
                "end": 701
              },
              "start": 695,
              "end": 701
            },
            "start": 693,
            "end": 701
          },
          "init": null,
          "definite": false,
          "start": 693,
          "end": 701
        }
      ],
      "declare": true,
      "start": 681,
      "end": 702
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 719,
                "end": 721
              },
              "start": 717,
              "end": 721
            },
            "start": 715,
            "end": 721
          },
          "init": null,
          "definite": false,
          "start": 715,
          "end": 721
        }
      ],
      "declare": true,
      "start": 703,
      "end": 722
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 745
                },
                "typeArguments": null,
                "start": 739,
                "end": 745
              },
              "start": 737,
              "end": 745
            },
            "start": 735,
            "end": 745
          },
          "init": null,
          "definite": false,
          "start": 735,
          "end": 745
        }
      ],
      "declare": true,
      "start": 723,
      "end": 746
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
            "name": "o3",
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
                  "start": 763,
                  "end": 764
                },
                "typeArguments": null,
                "start": 763,
                "end": 764
              },
              "start": 761,
              "end": 764
            },
            "start": 759,
            "end": 764
          },
          "init": null,
          "definite": false,
          "start": 759,
          "end": 764
        }
      ],
      "declare": true,
      "start": 747,
      "end": 765
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
            "name": "rb1",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 774
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 777,
              "end": 778
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 790,
              "end": 792
            },
            "start": 777,
            "end": 792
          },
          "definite": false,
          "start": 771,
          "end": 792
        }
      ],
      "declare": false,
      "start": 767,
      "end": 793
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
            "name": "rb2",
            "optional": false,
            "typeAnnotation": null,
            "start": 798,
            "end": 801
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 805
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 817,
              "end": 819
            },
            "start": 804,
            "end": 819
          },
          "definite": false,
          "start": 798,
          "end": 819
        }
      ],
      "declare": false,
      "start": 794,
      "end": 820
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
            "name": "rb3",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 828
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 832
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 846
            },
            "start": 831,
            "end": 846
          },
          "definite": false,
          "start": 825,
          "end": 846
        }
      ],
      "declare": false,
      "start": 821,
      "end": 847
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
            "name": "rb4",
            "optional": false,
            "typeAnnotation": null,
            "start": 852,
            "end": 855
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 859
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 871,
              "end": 873
            },
            "start": 858,
            "end": 873
          },
          "definite": false,
          "start": 852,
          "end": 873
        }
      ],
      "declare": false,
      "start": 848,
      "end": 874
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
            "name": "rb5",
            "optional": false,
            "typeAnnotation": null,
            "start": 879,
            "end": 882
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 885,
              "end": 886
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 898,
              "end": 899
            },
            "start": 885,
            "end": 899
          },
          "definite": false,
          "start": 879,
          "end": 899
        }
      ],
      "declare": false,
      "start": 875,
      "end": 900
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
            "name": "rb6",
            "optional": false,
            "typeAnnotation": null,
            "start": 905,
            "end": 908
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 911,
              "end": 912
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 924,
              "end": 928
            },
            "start": 911,
            "end": 928
          },
          "definite": false,
          "start": 905,
          "end": 928
        }
      ],
      "declare": false,
      "start": 901,
      "end": 929
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
            "name": "rb7",
            "optional": false,
            "typeAnnotation": null,
            "start": 934,
            "end": 937
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 940,
              "end": 941
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 953,
              "end": 955
            },
            "start": 940,
            "end": 955
          },
          "definite": false,
          "start": 934,
          "end": 955
        }
      ],
      "declare": false,
      "start": 930,
      "end": 956
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
            "name": "rb8",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 964
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 968
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null,
              "start": 980,
              "end": 982
            },
            "start": 967,
            "end": 982
          },
          "definite": false,
          "start": 961,
          "end": 982
        }
      ],
      "declare": false,
      "start": 957,
      "end": 983
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
            "name": "rb9",
            "optional": false,
            "typeAnnotation": null,
            "start": 988,
            "end": 991
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 995
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1007,
              "end": 1009
            },
            "start": 994,
            "end": 1009
          },
          "definite": false,
          "start": 988,
          "end": 1009
        }
      ],
      "declare": false,
      "start": 984,
      "end": 1010
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
            "name": "rb10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1015,
            "end": 1019
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1022,
              "end": 1023
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1037
            },
            "start": 1022,
            "end": 1037
          },
          "definite": false,
          "start": 1015,
          "end": 1037
        }
      ],
      "declare": false,
      "start": 1011,
      "end": 1038
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
            "name": "rc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1073,
            "end": 1076
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 1079,
              "end": 1081
            },
            "operator": "instanceof",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1093,
              "end": 1095
            },
            "start": 1079,
            "end": 1095
          },
          "definite": false,
          "start": 1073,
          "end": 1095
        }
      ],
      "declare": false,
      "start": 1069,
      "end": 1096
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1096
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
    "value": "C",
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
    "value": "foo",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 156,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 164,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "a1",
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
    "value": "number",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 180,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 188,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 196,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 205,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 244,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 254,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 257,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 281,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 284,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "ra3",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 308,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 311,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "var",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "ra4",
    "start": 329,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 335,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 338,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 352,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "ra5",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 364,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 378,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "ra6",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 388,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 393,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "ra7",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "String",
    "value": "''",
    "start": 417,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 420,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 431,
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
    "value": "var",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "ra8",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443
  },
  {
    "type": "Null",
    "value": "null",
    "start": 444,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 449,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "ra9",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 473,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 483,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 608,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 620,
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
    "value": "number",
    "start": 624,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 632,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 640,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 644,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 648,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 657,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 665,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 673,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 681,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 689,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 703,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 711,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 715,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 723,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 731,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 739,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 747,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 755,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 767,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 771,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 779,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 790,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 794,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 798,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 806,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 817,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 821,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 833,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 844,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 848,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 852,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 858,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 860,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 871,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 875,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "rb5",
    "start": 879,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 887,
    "end": 897
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 901,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "rb6",
    "start": 905,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 913,
    "end": 923
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 924,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 930,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "rb7",
    "start": 934,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 940,
    "end": 941
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 942,
    "end": 952
  },
  {
    "type": "String",
    "value": "''",
    "start": 953,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 957,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "rb8",
    "start": 961,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 969,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 980,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 984,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "rb9",
    "start": 988,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 996,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "rb10",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1024,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1035,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1069,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 1073,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "String",
    "value": "''",
    "start": 1079,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1082,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096
  }
]
```
