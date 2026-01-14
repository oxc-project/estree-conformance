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
                "start": 689,
                "end": 693
              },
              "start": 687,
              "end": 693
            },
            "start": 685,
            "end": 693
          },
          "init": null,
          "definite": false,
          "start": 685,
          "end": 693
        }
      ],
      "declare": false,
      "start": 681,
      "end": 694
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
                "start": 711,
                "end": 713
              },
              "start": 709,
              "end": 713
            },
            "start": 707,
            "end": 713
          },
          "init": null,
          "definite": false,
          "start": 707,
          "end": 713
        }
      ],
      "declare": true,
      "start": 695,
      "end": 714
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
                  "start": 731,
                  "end": 737
                },
                "typeArguments": null,
                "start": 731,
                "end": 737
              },
              "start": 729,
              "end": 737
            },
            "start": 727,
            "end": 737
          },
          "init": null,
          "definite": false,
          "start": 727,
          "end": 737
        }
      ],
      "declare": true,
      "start": 715,
      "end": 738
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
                  "start": 755,
                  "end": 756
                },
                "typeArguments": null,
                "start": 755,
                "end": 756
              },
              "start": 753,
              "end": 756
            },
            "start": 751,
            "end": 756
          },
          "init": null,
          "definite": false,
          "start": 751,
          "end": 756
        }
      ],
      "declare": true,
      "start": 739,
      "end": 757
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
            "start": 763,
            "end": 766
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 769,
              "end": 770
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 784
            },
            "start": 769,
            "end": 784
          },
          "definite": false,
          "start": 763,
          "end": 784
        }
      ],
      "declare": false,
      "start": 759,
      "end": 785
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
            "start": 790,
            "end": 793
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 796,
              "end": 797
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 811
            },
            "start": 796,
            "end": 811
          },
          "definite": false,
          "start": 790,
          "end": 811
        }
      ],
      "declare": false,
      "start": 786,
      "end": 812
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
            "start": 817,
            "end": 820
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 824
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 836,
              "end": 838
            },
            "start": 823,
            "end": 838
          },
          "definite": false,
          "start": 817,
          "end": 838
        }
      ],
      "declare": false,
      "start": 813,
      "end": 839
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
            "start": 844,
            "end": 847
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 851
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 865
            },
            "start": 850,
            "end": 865
          },
          "definite": false,
          "start": 844,
          "end": 865
        }
      ],
      "declare": false,
      "start": 840,
      "end": 866
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
            "start": 871,
            "end": 874
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 878
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 890,
              "end": 891
            },
            "start": 877,
            "end": 891
          },
          "definite": false,
          "start": 871,
          "end": 891
        }
      ],
      "declare": false,
      "start": 867,
      "end": 892
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
            "start": 897,
            "end": 900
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 904
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 916,
              "end": 920
            },
            "start": 903,
            "end": 920
          },
          "definite": false,
          "start": 897,
          "end": 920
        }
      ],
      "declare": false,
      "start": 893,
      "end": 921
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
            "start": 926,
            "end": 929
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 932,
              "end": 933
            },
            "operator": "instanceof",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 945,
              "end": 947
            },
            "start": 932,
            "end": 947
          },
          "definite": false,
          "start": 926,
          "end": 947
        }
      ],
      "declare": false,
      "start": 922,
      "end": 948
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
            "start": 953,
            "end": 956
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 959,
              "end": 960
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null,
              "start": 972,
              "end": 974
            },
            "start": 959,
            "end": 974
          },
          "definite": false,
          "start": 953,
          "end": 974
        }
      ],
      "declare": false,
      "start": 949,
      "end": 975
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
            "start": 980,
            "end": 983
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 987
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1001
            },
            "start": 986,
            "end": 1001
          },
          "definite": false,
          "start": 980,
          "end": 1001
        }
      ],
      "declare": false,
      "start": 976,
      "end": 1002
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
            "start": 1007,
            "end": 1011
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1015
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1027,
              "end": 1029
            },
            "start": 1014,
            "end": 1029
          },
          "definite": false,
          "start": 1007,
          "end": 1029
        }
      ],
      "declare": false,
      "start": 1003,
      "end": 1030
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
            "start": 1065,
            "end": 1068
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 1071,
              "end": 1073
            },
            "operator": "instanceof",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1085,
              "end": 1087
            },
            "start": 1071,
            "end": 1087
          },
          "definite": false,
          "start": 1065,
          "end": 1087
        }
      ],
      "declare": false,
      "start": 1061,
      "end": 1088
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1139,
                        "end": 1145
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1146,
                        "end": 1157
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1139,
                      "end": 1157
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1168,
                                  "end": 1169
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1171,
                                    "end": 1177
                                  },
                                  "start": 1169,
                                  "end": 1177
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1168,
                                "end": 1177
                              }
                            ],
                            "start": 1166,
                            "end": 1179
                          },
                          "start": 1164,
                          "end": 1179
                        },
                        "start": 1159,
                        "end": 1179
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1182,
                        "end": 1189
                      },
                      "start": 1180,
                      "end": 1189
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1138,
                    "end": 1190
                  }
                ],
                "start": 1137,
                "end": 1191
              },
              "start": 1135,
              "end": 1191
            },
            "start": 1133,
            "end": 1191
          },
          "init": null,
          "definite": false,
          "start": 1133,
          "end": 1191
        }
      ],
      "declare": true,
      "start": 1121,
      "end": 1192
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
            "name": "o5",
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1211,
                      "end": 1212
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1214,
                        "end": 1220
                      },
                      "start": 1212,
                      "end": 1220
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1211,
                    "end": 1220
                  }
                ],
                "start": 1209,
                "end": 1222
              },
              "start": 1207,
              "end": 1222
            },
            "start": 1205,
            "end": 1222
          },
          "init": null,
          "definite": false,
          "start": 1205,
          "end": 1222
        }
      ],
      "declare": true,
      "start": 1193,
      "end": 1223
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
            "name": "ra10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1228,
            "end": 1232
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "o5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1237
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1249,
              "end": 1251
            },
            "start": 1235,
            "end": 1251
          },
          "definite": false,
          "start": 1228,
          "end": 1251
        }
      ],
      "declare": false,
      "start": 1224,
      "end": 1252
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
            "name": "o6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1323,
                        "end": 1329
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1330,
                        "end": 1341
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1323,
                      "end": 1341
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 1350,
                            "end": 1357
                          },
                          "start": 1348,
                          "end": 1357
                        },
                        "start": 1343,
                        "end": 1357
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1360,
                        "end": 1366
                      },
                      "start": 1358,
                      "end": 1366
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1322,
                    "end": 1367
                  }
                ],
                "start": 1321,
                "end": 1368
              },
              "start": 1319,
              "end": 1368
            },
            "start": 1317,
            "end": 1368
          },
          "init": null,
          "definite": false,
          "start": 1317,
          "end": 1368
        }
      ],
      "declare": true,
      "start": 1305,
      "end": 1369
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
            "name": "rb11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1374,
            "end": 1378
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1381,
              "end": 1382
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1394,
              "end": 1396
            },
            "start": 1381,
            "end": 1396
          },
          "definite": false,
          "start": 1374,
          "end": 1396
        }
      ],
      "declare": false,
      "start": 1370,
      "end": 1397
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1397
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
    "type": "Keyword",
    "value": "var",
    "start": 681,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 685,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 689,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 695,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 703,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 707,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 715,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 723,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 727,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 731,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 739,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 747,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 751,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 759,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 763,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 771,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 786,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 790,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 798,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 809,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 813,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 817,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 825,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 840,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 844,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 850,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 852,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 863,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 867,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "rb5",
    "start": 871,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 879,
    "end": 889
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 893,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "rb6",
    "start": 897,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 905,
    "end": 915
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 916,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 922,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "rb7",
    "start": 926,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 932,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 934,
    "end": 944
  },
  {
    "type": "String",
    "value": "''",
    "start": 945,
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
    "value": "var",
    "start": 949,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "rb8",
    "start": 953,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 959,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 961,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 972,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 976,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "rb9",
    "start": 980,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 988,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1003,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "rb10",
    "start": 1007,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1016,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1027,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1061,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 1065,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "String",
    "value": "''",
    "start": 1071,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1074,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1121,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1129,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 1146,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1159,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1182,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1193,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1205,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1214,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1224,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "ra10",
    "start": 1228,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1235,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1238,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1249,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1305,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1313,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1317,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1323,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 1330,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1343,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1350,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1360,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1370,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "rb11",
    "start": 1374,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1383,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1394,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397
  }
]
```
