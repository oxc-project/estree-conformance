__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "react",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 23,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 46
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FullCalendarVDom",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 77
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
                      "name": "VNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 103
                    },
                    "moduleReference": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "react",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 111
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactNode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 112,
                        "end": 121
                      },
                      "start": 106,
                      "end": 121
                    },
                    "importKind": "value",
                    "start": 91,
                    "end": 122
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 84,
                  "end": 122
                }
              ],
              "start": 78,
              "end": 126
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 51,
            "end": 126
          }
        ],
        "start": 47,
        "end": 128
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 32,
      "end": 128
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FullCalendar",
          "optional": false,
          "typeAnnotation": null,
          "start": 151,
          "end": 163
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 164,
          "end": 167
        },
        "abstract": false,
        "declare": false,
        "start": 145,
        "end": 167
      },
      "exportKind": "value",
      "start": 130,
      "end": 167
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 168
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "react",
    "start": 12,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 32,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 51,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "FullCalendarVDom",
    "start": 61,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 84,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 91,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "react",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 112,
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
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 130,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 137,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 145,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "FullCalendar",
    "start": 151,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "preact",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "preact",
        "raw": "'preact'",
        "start": 24,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 48
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FullCalendarVDom",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 79
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "VNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 96
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "preact",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 105
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "VNode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 111
                      },
                      "start": 99,
                      "end": 111
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 112,
                          "end": 115
                        }
                      ],
                      "start": 111,
                      "end": 116
                    },
                    "start": 99,
                    "end": 116
                  },
                  "declare": false,
                  "start": 86,
                  "end": 117
                }
              ],
              "start": 80,
              "end": 121
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 53,
            "end": 121
          }
        ],
        "start": 49,
        "end": 123
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 34,
      "end": 123
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "EventInput",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 147
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 150,
          "end": 153
        },
        "declare": false,
        "start": 132,
        "end": 154
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 125,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "preact",
    "start": 12,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 19,
    "end": 23
  },
  {
    "type": "String",
    "value": "'preact'",
    "start": 24,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 34,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 42,
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
    "value": "namespace",
    "start": 53,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "FullCalendarVDom",
    "start": 63,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 86,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "preact",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "export",
    "start": 125,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 132,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "EventInput",
    "start": 137,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ";",
    "start": 153,
    "end": 154
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "start": 0,
      "end": 15
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 41
      },
      "start": 16,
      "end": 42
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 66
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReactNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 87
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 90,
              "end": 93
            },
            "declare": false,
            "start": 73,
            "end": 94
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useMemo",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 115
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 117
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 116,
                  "end": 117
                }
              ],
              "start": 115,
              "end": 118
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "factory",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 134,
                          "end": 135
                        },
                        "typeArguments": null,
                        "start": 134,
                        "end": 135
                      },
                      "start": 131,
                      "end": 135
                    },
                    "start": 128,
                    "end": 135
                  },
                  "start": 126,
                  "end": 135
                },
                "start": 119,
                "end": 135
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 143,
                    "end": 152
                  },
                  "start": 141,
                  "end": 152
                },
                "start": 137,
                "end": 152
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "typeArguments": null,
                "start": 155,
                "end": 156
              },
              "start": 153,
              "end": 156
            },
            "body": null,
            "expression": false,
            "start": 99,
            "end": 157
          }
        ],
        "start": 67,
        "end": 159
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 43,
      "end": 159
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 160
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
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 16,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 23,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 26,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 36,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 43,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 51,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 61,
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
    "value": "type",
    "start": 73,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 78,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 99,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "useMemo",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "factory",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 131,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 143,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "preact",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 26
      },
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VNode",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 50
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 52
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 55,
                "end": 57
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 51,
              "end": 57
            }
          ],
          "start": 50,
          "end": 58
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 59,
          "end": 61
        },
        "declare": false,
        "start": 35,
        "end": 61
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 28,
      "end": 61
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 62
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
    "type": "Identifier",
    "value": "as",
    "start": 7,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 10,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "preact",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 28,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 35,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "VNode",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
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
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "FullCalendar",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 19
          },
          "start": 7,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@fullcalendar/react",
        "raw": "\"@fullcalendar/react\"",
        "start": 25,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 47
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "EventInput",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 67
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "EventInput",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 67
          },
          "importKind": "value",
          "start": 57,
          "end": 67
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@fullcalendar/core",
        "raw": "\"@fullcalendar/core\"",
        "start": 75,
        "end": 95
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 48,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 96
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "FullCalendar",
    "start": 7,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24
  },
  {
    "type": "String",
    "value": "\"@fullcalendar/react\"",
    "start": 25,
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
    "value": "import",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "EventInput",
    "start": 57,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 70,
    "end": 74
  },
  {
    "type": "String",
    "value": "\"@fullcalendar/core\"",
    "start": 75,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  }
]
```
