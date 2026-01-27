__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 40
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 50
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 52,
                  "end": 58
                },
                "start": 50,
                "end": 58
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 47,
              "end": 59
            }
          ],
          "start": 41,
          "end": 61
        },
        "abstract": false,
        "declare": false,
        "start": 26,
        "end": 61
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 61
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 62
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 32,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 21
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 31
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 33,
                  "end": 39
                },
                "start": 31,
                "end": 39
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 28,
              "end": 40
            }
          ],
          "start": 22,
          "end": 42
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 42
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 42
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 13,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 28,
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
    "value": "string",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m",
        "raw": "'m'",
        "start": 92,
        "end": 95
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 124
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
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 138
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 140,
                        "end": 146
                      },
                      "start": 138,
                      "end": 146
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 135,
                    "end": 147
                  }
                ],
                "start": 125,
                "end": 153
              },
              "abstract": false,
              "declare": false,
              "start": 109,
              "end": 153
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 102,
            "end": 153
          }
        ],
        "start": 96,
        "end": 155
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 77,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 157
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 77,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 85,
    "end": 91
  },
  {
    "type": "String",
    "value": "'m'",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 102,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 115,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m2",
        "raw": "'m2'",
        "start": 15,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 48
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
                      "name": "bing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 63
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 65,
                        "end": 71
                      },
                      "start": 63,
                      "end": 71
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 59,
                    "end": 72
                  }
                ],
                "start": 49,
                "end": 78
              },
              "abstract": false,
              "declare": false,
              "start": 33,
              "end": 78
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 78
          }
        ],
        "start": 20,
        "end": 80
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 80
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 81
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "'m2'",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 39,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mi_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 257
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "./privacyTopLevelAmbientExternalModuleImportWithExport_require",
            "raw": "\"./privacyTopLevelAmbientExternalModuleImportWithExport_require\"",
            "start": 268,
            "end": 332
          },
          "start": 260,
          "end": 333
        },
        "importKind": "value",
        "start": 230,
        "end": 334
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 223,
      "end": 334
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mu_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 349,
          "end": 369
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "./privacyTopLevelAmbientExternalModuleImportWithExport_require1",
            "raw": "\"./privacyTopLevelAmbientExternalModuleImportWithExport_require1\"",
            "start": 380,
            "end": 445
          },
          "start": 372,
          "end": 446
        },
        "importKind": "value",
        "start": 342,
        "end": 447
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 335,
      "end": 447
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mi_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 462,
          "end": 481
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "m",
            "raw": "\"m\"",
            "start": 492,
            "end": 495
          },
          "start": 484,
          "end": 496
        },
        "importKind": "value",
        "start": 455,
        "end": 497
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 448,
      "end": 497
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mu_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 512,
          "end": 531
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "m2",
            "raw": "\"m2\"",
            "start": 542,
            "end": 546
          },
          "start": 534,
          "end": 547
        },
        "importKind": "value",
        "start": 505,
        "end": 548
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 498,
      "end": 548
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
            "name": "privateUse_im_public_mi_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 619
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 646
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 655
              },
              "optional": false,
              "computed": false,
              "start": 626,
              "end": 655
            },
            "typeArguments": null,
            "arguments": [],
            "start": 622,
            "end": 657
          },
          "definite": false,
          "start": 588,
          "end": 657
        }
      ],
      "declare": false,
      "start": 584,
      "end": 658
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicUse_im_public_mi_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 700
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 727
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 728,
                  "end": 736
                },
                "optional": false,
                "computed": false,
                "start": 707,
                "end": 736
              },
              "typeArguments": null,
              "arguments": [],
              "start": 703,
              "end": 738
            },
            "definite": false,
            "start": 670,
            "end": 738
          }
        ],
        "declare": false,
        "start": 666,
        "end": 739
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 659,
      "end": 739
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
            "name": "privateUse_im_public_mu_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 744,
            "end": 775
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 802
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 803,
                "end": 811
              },
              "optional": false,
              "computed": false,
              "start": 782,
              "end": 811
            },
            "typeArguments": null,
            "arguments": [],
            "start": 778,
            "end": 813
          },
          "definite": false,
          "start": 744,
          "end": 813
        }
      ],
      "declare": false,
      "start": 740,
      "end": 814
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicUse_im_public_mu_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 856
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mu_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 863,
                  "end": 883
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 884,
                  "end": 892
                },
                "optional": false,
                "computed": false,
                "start": 863,
                "end": 892
              },
              "typeArguments": null,
              "arguments": [],
              "start": 859,
              "end": 894
            },
            "definite": false,
            "start": 826,
            "end": 894
          }
        ],
        "declare": false,
        "start": 822,
        "end": 895
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 815,
      "end": 895
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
            "name": "privateUse_im_public_mi_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 900,
            "end": 930
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 937,
                "end": 956
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 957,
                "end": 966
              },
              "optional": false,
              "computed": false,
              "start": 937,
              "end": 966
            },
            "typeArguments": null,
            "arguments": [],
            "start": 933,
            "end": 968
          },
          "definite": false,
          "start": 900,
          "end": 968
        }
      ],
      "declare": false,
      "start": 896,
      "end": 969
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicUse_im_public_mi_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 1010
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1017,
                  "end": 1036
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1037,
                  "end": 1046
                },
                "optional": false,
                "computed": false,
                "start": 1017,
                "end": 1046
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1013,
              "end": 1048
            },
            "definite": false,
            "start": 981,
            "end": 1048
          }
        ],
        "declare": false,
        "start": 977,
        "end": 1049
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 970,
      "end": 1049
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
            "name": "privateUse_im_public_mi_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 1054,
            "end": 1084
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1091,
                "end": 1110
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1111,
                "end": 1120
              },
              "optional": false,
              "computed": false,
              "start": 1091,
              "end": 1120
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1087,
            "end": 1122
          },
          "definite": false,
          "start": 1054,
          "end": 1122
        }
      ],
      "declare": false,
      "start": 1050,
      "end": 1123
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicUse_im_public_mi_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 1135,
              "end": 1164
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1171,
                  "end": 1190
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1191,
                  "end": 1200
                },
                "optional": false,
                "computed": false,
                "start": 1171,
                "end": 1200
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1167,
              "end": 1202
            },
            "definite": false,
            "start": 1135,
            "end": 1202
          }
        ],
        "declare": false,
        "start": 1131,
        "end": 1203
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1124,
      "end": 1203
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 223,
  "end": 1203
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 223,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 230,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_private",
    "start": 237,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 260,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "String",
    "value": "\"./privacyTopLevelAmbientExternalModuleImportWithExport_require\"",
    "start": 268,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 335,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 342,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "im_public_mu_private",
    "start": 349,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 372,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "String",
    "value": "\"./privacyTopLevelAmbientExternalModuleImportWithExport_require1\"",
    "start": 380,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 448,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 455,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_public",
    "start": 462,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 484,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "String",
    "value": "\"m\"",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 498,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 505,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "im_public_mu_public",
    "start": 512,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 534,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "String",
    "value": "\"m2\"",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
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
    "value": "var",
    "start": 584,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_mi_private",
    "start": 588,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_private",
    "start": 626,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 647,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 659,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 666,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_mi_private",
    "start": 670,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 703,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_private",
    "start": 707,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 728,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 740,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_mu_private",
    "start": 744,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 778,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "im_public_mu_private",
    "start": 782,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 803,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 815,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 822,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_mu_private",
    "start": 826,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 859,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "im_public_mu_private",
    "start": 863,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 884,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 896,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_mi_public",
    "start": 900,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 933,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_public",
    "start": 937,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 957,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 970,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 977,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_mi_public",
    "start": 981,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_public",
    "start": 1017,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 1037,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_mi_public",
    "start": 1054,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1087,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_public",
    "start": 1091,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 1111,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1124,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1131,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_mi_public",
    "start": 1135,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1167,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_public",
    "start": 1171,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 1191,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203
  }
]
```
