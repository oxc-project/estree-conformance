__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 15,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "WriteFileOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 57
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 58,
                "end": 60
              },
              "declare": false,
              "start": 31,
              "end": 60
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 24,
            "end": 60
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "writeFile",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 88
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    },
                    "start": 93,
                    "end": 101
                  },
                  "start": 89,
                  "end": 101
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    },
                    "start": 107,
                    "end": 112
                  },
                  "start": 103,
                  "end": 112
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WriteFileOptions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 139
                      },
                      "typeArguments": null,
                      "start": 123,
                      "end": 139
                    },
                    "start": 121,
                    "end": 139
                  },
                  "start": 114,
                  "end": 139
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Error",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 157,
                                "end": 162
                              },
                              "typeArguments": null,
                              "start": 157,
                              "end": 162
                            },
                            "start": 155,
                            "end": 162
                          },
                          "start": 152,
                          "end": 162
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 167,
                          "end": 171
                        },
                        "start": 164,
                        "end": 171
                      },
                      "start": 151,
                      "end": 171
                    },
                    "start": 149,
                    "end": 171
                  },
                  "start": 141,
                  "end": 171
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 174,
                  "end": 178
                },
                "start": 172,
                "end": 178
              },
              "body": null,
              "expression": false,
              "start": 70,
              "end": 179
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 63,
            "end": 179
          }
        ],
        "start": 20,
        "end": 181
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 181
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 182
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
    "value": "\"fs\"",
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
    "start": 24,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 31,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "WriteFileOptions",
    "start": 41,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 63,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 70,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "writeFile",
    "start": 79,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 89,
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
    "value": "string",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 114,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "WriteFileOptions",
    "start": 123,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 141,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 164,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "writeFile",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "writeFile",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 36
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 36
          },
          "importKind": "value",
          "start": 20,
          "end": 36
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 54
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "OtherName",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 67
          },
          "importKind": "value",
          "start": 38,
          "end": 67
        }
      ],
      "source": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 75,
        "end": 79
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 80
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
            "name": "JSDocType",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 140
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSDocType",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 140
          },
          "exportKind": "value",
          "start": 131,
          "end": 140
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 122,
      "end": 143
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
            "name": "JSDocType",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 162
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ThisIsFine",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 176
          },
          "exportKind": "value",
          "start": 153,
          "end": 176
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 144,
      "end": 179
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
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 205
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "WriteFileOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 205
          },
          "exportKind": "value",
          "start": 189,
          "end": 205
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 180,
      "end": 208
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 208
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
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "writeFile",
    "start": 9,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "WriteFileOptions",
    "start": 20,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "WriteFileOptions",
    "start": 38,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 55,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "OtherName",
    "start": 58,
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
    "value": "\"fs\"",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "JSDocType",
    "start": 131,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "JSDocType",
    "start": 153,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 163,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "ThisIsFine",
    "start": 166,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "WriteFileOptions",
    "start": 189,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  }
]
```
