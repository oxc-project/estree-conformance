__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 15
          },
          "init": {
            "type": "Literal",
            "value": "someValue",
            "raw": "\"someValue\"",
            "start": 18,
            "end": 29
          },
          "definite": false,
          "start": 6,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someType",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 44
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": "someType",
          "raw": "\"someType\"",
          "start": 47,
          "end": 57
        },
        "start": 47,
        "end": 57
      },
      "declare": false,
      "start": 31,
      "end": 58
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "someValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 78
          },
          "exported": {
            "type": "Literal",
            "value": "<X>",
            "raw": "\"<X>\"",
            "start": 82,
            "end": 87
          },
          "exportKind": "value",
          "start": 69,
          "end": 87
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 60,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<X>",
            "raw": "\"<X>\"",
            "start": 100,
            "end": 105
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueX",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 115
          },
          "importKind": "value",
          "start": 100,
          "end": 115
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 123,
        "end": 169
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 170
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "valueX",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 181
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "someValue",
          "raw": "\"someValue\"",
          "start": 186,
          "end": 197
        },
        "start": 175,
        "end": 197
      },
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "value": "should be someValue",
          "raw": "\"should be someValue\"",
          "start": 205,
          "end": 226
        },
        "start": 199,
        "end": 227
      },
      "alternate": null,
      "start": 171,
      "end": 227
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Literal",
            "value": "<X>",
            "raw": "\"<X>\"",
            "start": 238,
            "end": 243
          },
          "exported": {
            "type": "Literal",
            "value": "<Y>",
            "raw": "\"<Y>\"",
            "start": 247,
            "end": 252
          },
          "exportKind": "value",
          "start": 238,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 260,
        "end": 306
      },
      "exportKind": "value",
      "attributes": [],
      "start": 229,
      "end": 307
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<Y>",
            "raw": "\"<Y>\"",
            "start": 317,
            "end": 322
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueY",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 332
          },
          "importKind": "value",
          "start": 317,
          "end": 332
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 340,
        "end": 386
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 308,
      "end": 387
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "valueY",
          "optional": false,
          "typeAnnotation": null,
          "start": 392,
          "end": 398
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "someValue",
          "raw": "\"someValue\"",
          "start": 403,
          "end": 414
        },
        "start": 392,
        "end": 414
      },
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "value": "should be someValue",
          "raw": "\"should be someValue\"",
          "start": 422,
          "end": 443
        },
        "start": 416,
        "end": 444
      },
      "alternate": null,
      "start": 388,
      "end": 444
    },
    {
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Literal",
        "value": "<Z>",
        "raw": "\"<Z>\"",
        "start": 458,
        "end": 463
      },
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 469,
        "end": 515
      },
      "attributes": [],
      "exportKind": "value",
      "start": 446,
      "end": 516
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<Z>",
            "raw": "\"<Z>\"",
            "start": 526,
            "end": 531
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null,
            "start": 535,
            "end": 541
          },
          "importKind": "value",
          "start": 526,
          "end": 541
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 549,
        "end": 595
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 517,
      "end": 596
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 607
          },
          "property": {
            "type": "Literal",
            "value": "<X>",
            "raw": "\"<X>\"",
            "start": 608,
            "end": 613
          },
          "optional": false,
          "computed": true,
          "start": 601,
          "end": 614
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "someValue",
          "raw": "\"someValue\"",
          "start": 619,
          "end": 630
        },
        "start": 601,
        "end": 630
      },
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "value": "should be someValue",
          "raw": "\"should be someValue\"",
          "start": 638,
          "end": 659
        },
        "start": 632,
        "end": 660
      },
      "alternate": null,
      "start": 597,
      "end": 660
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null,
            "start": 665,
            "end": 671
          },
          "property": {
            "type": "Literal",
            "value": "<Y>",
            "raw": "\"<Y>\"",
            "start": 672,
            "end": 677
          },
          "optional": false,
          "computed": true,
          "start": 665,
          "end": 678
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "someValue",
          "raw": "\"someValue\"",
          "start": 683,
          "end": 694
        },
        "start": 665,
        "end": 694
      },
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "value": "should be someValue",
          "raw": "\"should be someValue\"",
          "start": 702,
          "end": 723
        },
        "start": 696,
        "end": 724
      },
      "alternate": null,
      "start": 661,
      "end": 724
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "typeAnnotation": null,
            "start": 729,
            "end": 735
          },
          "property": {
            "type": "Literal",
            "value": "<Z>",
            "raw": "\"<Z>\"",
            "start": 736,
            "end": 741
          },
          "optional": false,
          "computed": true,
          "start": 729,
          "end": 742
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "valueZ",
          "optional": false,
          "typeAnnotation": null,
          "start": 747,
          "end": 753
        },
        "start": 729,
        "end": 753
      },
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "value": "should be export namespace",
          "raw": "\"should be export namespace\"",
          "start": 761,
          "end": 789
        },
        "start": 755,
        "end": 790
      },
      "alternate": null,
      "start": 725,
      "end": 790
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "someType",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 814
          },
          "exported": {
            "type": "Literal",
            "value": "<A>",
            "raw": "\"<A>\"",
            "start": 818,
            "end": 823
          },
          "exportKind": "type",
          "start": 801,
          "end": 823
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 792,
      "end": 826
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<A>",
            "raw": "\"<A>\"",
            "start": 841,
            "end": 846
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeA",
            "optional": false,
            "typeAnnotation": null,
            "start": 850,
            "end": 855
          },
          "importKind": "type",
          "start": 836,
          "end": 855
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 863,
        "end": 909
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 827,
      "end": 910
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
            "name": "importTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "typeA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 934
                },
                "typeArguments": null,
                "start": 929,
                "end": 934
              },
              "start": 927,
              "end": 934
            },
            "start": 917,
            "end": 934
          },
          "init": {
            "type": "Literal",
            "value": "expect error about someType",
            "raw": "\"expect error about someType\"",
            "start": 937,
            "end": 966
          },
          "definite": false,
          "start": 917,
          "end": 966
        }
      ],
      "declare": false,
      "start": 911,
      "end": 967
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Literal",
            "value": "<A>",
            "raw": "\"<A>\"",
            "start": 983,
            "end": 988
          },
          "exported": {
            "type": "Literal",
            "value": "<B>",
            "raw": "\"<B>\"",
            "start": 992,
            "end": 997
          },
          "exportKind": "type",
          "start": 978,
          "end": 997
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 1005,
        "end": 1051
      },
      "exportKind": "value",
      "attributes": [],
      "start": 969,
      "end": 1052
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<B>",
            "raw": "\"<B>\"",
            "start": 1067,
            "end": 1072
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1081
          },
          "importKind": "type",
          "start": 1062,
          "end": 1081
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 1089,
        "end": 1135
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1053,
      "end": 1136
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
            "name": "reimportTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "typeB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1157,
                  "end": 1162
                },
                "typeArguments": null,
                "start": 1157,
                "end": 1162
              },
              "start": 1155,
              "end": 1162
            },
            "start": 1143,
            "end": 1162
          },
          "init": {
            "type": "Literal",
            "value": "expect error about someType",
            "raw": "\"expect error about someType\"",
            "start": 1165,
            "end": 1194
          },
          "definite": false,
          "start": 1143,
          "end": 1194
        }
      ],
      "declare": false,
      "start": 1137,
      "end": 1195
    },
    {
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Literal",
        "value": "<C>",
        "raw": "\"<C>\"",
        "start": 1214,
        "end": 1219
      },
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 1225,
        "end": 1271
      },
      "attributes": [],
      "exportKind": "type",
      "start": 1197,
      "end": 1272
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "<C>",
            "raw": "\"<C>\"",
            "start": 1287,
            "end": 1292
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1296,
            "end": 1301
          },
          "importKind": "type",
          "start": 1282,
          "end": 1301
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "start": 1309,
        "end": 1355
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1273,
      "end": 1356
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "otherType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1369,
          "end": 1378
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "otherType",
            "raw": "\"otherType\"",
            "start": 1381,
            "end": 1392
          },
          "start": 1381,
          "end": 1392
        },
        "declare": false,
        "start": 1364,
        "end": 1393
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1357,
      "end": 1393
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
            "name": "importStarTestA",
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
                    "name": "typeC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1417,
                    "end": 1422
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "otherType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1423,
                    "end": 1432
                  },
                  "start": 1417,
                  "end": 1432
                },
                "typeArguments": null,
                "start": 1417,
                "end": 1432
              },
              "start": 1415,
              "end": 1432
            },
            "start": 1400,
            "end": 1432
          },
          "init": {
            "type": "Literal",
            "value": "expect error about otherType",
            "raw": "\"expect error about otherType\"",
            "start": 1435,
            "end": 1465
          },
          "definite": false,
          "start": 1400,
          "end": 1465
        }
      ],
      "declare": false,
      "start": 1394,
      "end": 1466
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1466
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "someValue",
    "start": 6,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 18,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 31,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "someType",
    "start": 36,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "String",
    "value": "\"someType\"",
    "start": 47,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "someValue",
    "start": 69,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 79,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"<X>\"",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "String",
    "value": "\"<X>\"",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 106,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "valueX",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 118,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 123,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "valueX",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 182,
    "end": 185
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 186,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 199,
    "end": 204
  },
  {
    "type": "String",
    "value": "\"should be someValue\"",
    "start": 205,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "String",
    "value": "\"<X>\"",
    "start": 238,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 244,
    "end": 246
  },
  {
    "type": "String",
    "value": "\"<Y>\"",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 255,
    "end": 259
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 260,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "String",
    "value": "\"<Y>\"",
    "start": 317,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 323,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "valueY",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 335,
    "end": 339
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 340,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "valueY",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 399,
    "end": 402
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 403,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 416,
    "end": 421
  },
  {
    "type": "String",
    "value": "\"should be someValue\"",
    "start": 422,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 455,
    "end": 457
  },
  {
    "type": "String",
    "value": "\"<Z>\"",
    "start": 458,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 464,
    "end": 468
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 469,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 517,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "String",
    "value": "\"<Z>\"",
    "start": 526,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 532,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "valueZ",
    "start": 535,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 544,
    "end": 548
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 549,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 597,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "valueZ",
    "start": 601,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 607,
    "end": 608
  },
  {
    "type": "String",
    "value": "\"<X>\"",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 615,
    "end": 618
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 619,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 632,
    "end": 637
  },
  {
    "type": "String",
    "value": "\"should be someValue\"",
    "start": 638,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "valueZ",
    "start": 665,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 671,
    "end": 672
  },
  {
    "type": "String",
    "value": "\"<Y>\"",
    "start": 672,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 679,
    "end": 682
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 683,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 696,
    "end": 701
  },
  {
    "type": "String",
    "value": "\"should be someValue\"",
    "start": 702,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "valueZ",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 735,
    "end": 736
  },
  {
    "type": "String",
    "value": "\"<Z>\"",
    "start": 736,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 743,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "valueZ",
    "start": 747,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 755,
    "end": 760
  },
  {
    "type": "String",
    "value": "\"should be export namespace\"",
    "start": 761,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 792,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 801,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "someType",
    "start": 806,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 815,
    "end": 817
  },
  {
    "type": "String",
    "value": "\"<A>\"",
    "start": 818,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 827,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 836,
    "end": 840
  },
  {
    "type": "String",
    "value": "\"<A>\"",
    "start": 841,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 847,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "typeA",
    "start": 850,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 858,
    "end": 862
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 863,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 911,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "importTest",
    "start": 917,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "typeA",
    "start": 929,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 935,
    "end": 936
  },
  {
    "type": "String",
    "value": "\"expect error about someType\"",
    "start": 937,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 969,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 978,
    "end": 982
  },
  {
    "type": "String",
    "value": "\"<A>\"",
    "start": 983,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 989,
    "end": 991
  },
  {
    "type": "String",
    "value": "\"<B>\"",
    "start": 992,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1000,
    "end": 1004
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 1005,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1053,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1062,
    "end": 1066
  },
  {
    "type": "String",
    "value": "\"<B>\"",
    "start": 1067,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1073,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "typeB",
    "start": 1076,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1084,
    "end": 1088
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 1089,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1137,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "reimportTest",
    "start": 1143,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "typeB",
    "start": 1157,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "String",
    "value": "\"expect error about someType\"",
    "start": 1165,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1197,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1204,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1211,
    "end": 1213
  },
  {
    "type": "String",
    "value": "\"<C>\"",
    "start": 1214,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1220,
    "end": 1224
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 1225,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1273,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1282,
    "end": 1286
  },
  {
    "type": "String",
    "value": "\"<C>\"",
    "start": 1287,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1293,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "typeC",
    "start": 1296,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1304,
    "end": 1308
  },
  {
    "type": "String",
    "value": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
    "start": 1309,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1357,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1364,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "otherType",
    "start": 1369,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "String",
    "value": "\"otherType\"",
    "start": 1381,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1394,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "importStarTestA",
    "start": 1400,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "typeC",
    "start": 1417,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "otherType",
    "start": 1423,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "String",
    "value": "\"expect error about otherType\"",
    "start": 1435,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466
  }
]
```
