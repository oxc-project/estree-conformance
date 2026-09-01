__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "MsPortalFx",
            "optional": false,
            "typeAnnotation": null,
            "start": 10,
            "end": 20
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "ViewModels",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 31
          },
          "start": 10,
          "end": 31
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Dialogs",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 39
        },
        "start": 10,
        "end": 39
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DialogResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 77
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Abort",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 93
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 88,
                    "end": 93
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 109
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 103,
                    "end": 109
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ignore",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 125
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 119,
                    "end": 125
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "No",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 137
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 135,
                    "end": 137
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ok",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 149
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 147,
                    "end": 149
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Retry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 164
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 159,
                    "end": 164
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Yes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 177
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 174,
                    "end": 177
                  }
                ],
                "start": 78,
                "end": 184
              },
              "const": true,
              "declare": false,
              "start": 54,
              "end": 184
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 47,
            "end": 184
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DialogResultCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 227
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "MsPortalFx",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 247,
                                    "end": 257
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ViewModels",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 258,
                                    "end": 268
                                  },
                                  "start": 247,
                                  "end": 268
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Dialogs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 269,
                                  "end": 276
                                },
                                "start": 247,
                                "end": 276
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DialogResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 277,
                                "end": 289
                              },
                              "start": 247,
                              "end": 289
                            },
                            "typeArguments": null,
                            "start": 247,
                            "end": 289
                          },
                          "start": 245,
                          "end": 289
                        },
                        "start": 239,
                        "end": 289
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 292,
                        "end": 296
                      },
                      "start": 290,
                      "end": 296
                    },
                    "start": 238,
                    "end": 297
                  }
                ],
                "start": 228,
                "end": 303
              },
              "declare": false,
              "start": 197,
              "end": 303
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 190,
            "end": 303
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "someExportedFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 345
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 348,
                "end": 355
              },
              "expression": false,
              "start": 316,
              "end": 355
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 309,
            "end": 355
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MessageBoxButtons",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 396
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AbortRetryIgnore",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 407,
                      "end": 423
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 407,
                    "end": 423
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OK",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 435
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 433,
                    "end": 435
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OKCancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 453
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 445,
                    "end": 453
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RetryCancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 474
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 463,
                    "end": 474
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "YesNo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 489
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 484,
                    "end": 489
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "YesNoCancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 499,
                      "end": 510
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 499,
                    "end": 510
                  }
                ],
                "start": 397,
                "end": 517
              },
              "const": true,
              "declare": false,
              "start": 368,
              "end": 517
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 361,
            "end": 517
          }
        ],
        "start": 40,
        "end": 519
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 519
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "MsPortalFx",
          "optional": false,
          "typeAnnotation": null,
          "start": 532,
          "end": 542
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ViewModels",
          "optional": false,
          "typeAnnotation": null,
          "start": 543,
          "end": 553
        },
        "start": 532,
        "end": 553
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReExportedEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 674,
                "end": 688
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dialogs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 698
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DialogResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 711
                },
                "start": 691,
                "end": 711
              },
              "importKind": "value",
              "start": 667,
              "end": 712
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 660,
            "end": 712
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DialogButtons",
              "optional": false,
              "typeAnnotation": null,
              "start": 821,
              "end": 834
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dialogs",
                "optional": false,
                "typeAnnotation": null,
                "start": 837,
                "end": 844
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "MessageBoxButtons",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 862
              },
              "start": 837,
              "end": 862
            },
            "importKind": "value",
            "start": 814,
            "end": 863
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 995,
                "end": 1003
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dialogs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1006,
                  "end": 1013
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DialogResultCallback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1034
                },
                "start": 1006,
                "end": 1034
              },
              "importKind": "value",
              "start": 988,
              "end": 1035
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 981,
            "end": 1035
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeUsagesOfTheseConsts",
                "optional": false,
                "typeAnnotation": null,
                "start": 1054,
                "end": 1077
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1088,
                      "end": 1099
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
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1178,
                                  "end": 1184
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ReExportedEnum",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1187,
                                    "end": 1201
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Cancel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1202,
                                    "end": 1208
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1187,
                                  "end": 1208
                                },
                                "definite": false,
                                "start": 1178,
                                "end": 1208
                              }
                            ],
                            "declare": false,
                            "start": 1172,
                            "end": 1209
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
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1222,
                                  "end": 1229
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1230,
                                  "end": 1233
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1222,
                                "end": 1233
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1234,
                                  "end": 1240
                                }
                              ],
                              "optional": false,
                              "start": 1222,
                              "end": 1241
                            },
                            "directive": null,
                            "start": 1222,
                            "end": 1242
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
                                  "name": "value2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1261,
                                  "end": 1267
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "DialogButtons",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1270,
                                    "end": 1283
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "OKCancel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1284,
                                    "end": 1292
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1270,
                                  "end": 1292
                                },
                                "definite": false,
                                "start": 1261,
                                "end": 1292
                              }
                            ],
                            "declare": false,
                            "start": 1255,
                            "end": 1293
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
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1306,
                                  "end": 1313
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1314,
                                  "end": 1317
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1306,
                                "end": 1317
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1318,
                                  "end": 1324
                                }
                              ],
                              "optional": false,
                              "start": 1306,
                              "end": 1325
                            },
                            "directive": null,
                            "start": 1306,
                            "end": 1326
                          }
                        ],
                        "start": 1102,
                        "end": 1336
                      },
                      "expression": false,
                      "start": 1099,
                      "end": 1336
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1088,
                    "end": 1336
                  }
                ],
                "start": 1078,
                "end": 1342
              },
              "abstract": false,
              "declare": false,
              "start": 1048,
              "end": 1342
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1041,
            "end": 1342
          }
        ],
        "start": 554,
        "end": 1344
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 522,
      "end": 1344
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1344
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "MsPortalFx",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "ViewModels",
    "start": 21,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Dialogs",
    "start": 32,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 54,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 60,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "DialogResult",
    "start": 65,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Abort",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Cancel",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Ignore",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Ok",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "Retry",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 190,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 197,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "DialogResultCallback",
    "start": 207,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "MsPortalFx",
    "start": 247,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "ViewModels",
    "start": 258,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "Dialogs",
    "start": 269,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "DialogResult",
    "start": 277,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 292,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 309,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 316,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "someExportedFunction",
    "start": 325,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 361,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 368,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 374,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "MessageBoxButtons",
    "start": 379,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "AbortRetryIgnore",
    "start": 407,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "OK",
    "start": 433,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "OKCancel",
    "start": 445,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "RetryCancel",
    "start": 463,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 484,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "YesNoCancel",
    "start": 499,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 522,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "MsPortalFx",
    "start": 532,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "ViewModels",
    "start": 543,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 660,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 667,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "ReExportedEnum",
    "start": 674,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "Dialogs",
    "start": 691,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "DialogResult",
    "start": 699,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 814,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "DialogButtons",
    "start": 821,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "Dialogs",
    "start": 837,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "MessageBoxButtons",
    "start": 845,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 981,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 988,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 995,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "Dialogs",
    "start": 1006,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "DialogResultCallback",
    "start": 1014,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1041,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1048,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "SomeUsagesOfTheseConsts",
    "start": 1054,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1088,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1172,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 1178,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "ReExportedEnum",
    "start": 1187,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "Cancel",
    "start": 1202,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1222,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1230,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 1234,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1255,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 1261,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "DialogButtons",
    "start": 1270,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "OKCancel",
    "start": 1284,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1306,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1314,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 1318,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1343,
    "end": 1344
  }
]
```
