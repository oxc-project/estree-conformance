__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./utils",
        "raw": "\"./utils\"",
        "start": 14,
        "end": 23
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 24
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
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 41
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SvgIcon",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 52
          },
          "exportKind": "value",
          "start": 34,
          "end": 52
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./SvgIcon",
        "raw": "\"./SvgIcon\"",
        "start": 60,
        "end": 71
      },
      "exportKind": "value",
      "attributes": [],
      "start": 25,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 73
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
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "\"./utils\"",
    "start": 14,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 34,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 42,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "SvgIcon",
    "start": 45,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 55,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"./SvgIcon\"",
    "start": 60,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
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
            "name": "StyledComponentProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 29
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledComponentProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 29
          },
          "importKind": "value",
          "start": 9,
          "end": 29
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@ts-bug/styles",
        "raw": "\"@ts-bug/styles\"",
        "start": 37,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 54
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SvgIconProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 84
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "StyledComponentProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 113
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "root",
                    "raw": "\"root\"",
                    "start": 114,
                    "end": 120
                  },
                  "start": 114,
                  "end": 120
                }
              ],
              "start": 113,
              "end": 121
            },
            "start": 93,
            "end": 121
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 136
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 139,
                    "end": 145
                  },
                  "start": 139,
                  "end": 147
                },
                "start": 137,
                "end": 147
              },
              "accessibility": null,
              "static": false,
              "start": 128,
              "end": 148
            }
          ],
          "start": 122,
          "end": 150
        },
        "declare": false,
        "start": 62,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 55,
      "end": 150
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 181
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 194
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 196,
                  "end": 202
                },
                "start": 194,
                "end": 202
              },
              "accessibility": null,
              "static": false,
              "start": 188,
              "end": 203
            }
          ],
          "start": 182,
          "end": 205
        },
        "declare": false,
        "start": 158,
        "end": 205
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 151,
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
            "name": "SvgIcon",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 242
                },
                "typeArguments": null,
                "start": 229,
                "end": 242
              },
              "start": 227,
              "end": 242
            },
            "start": 220,
            "end": 242
          },
          "init": null,
          "definite": false,
          "start": 220,
          "end": 242
        }
      ],
      "declare": true,
      "start": 206,
      "end": 243
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "SvgIcon",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 266
      },
      "exportKind": "value",
      "start": 244,
      "end": 267
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 268
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
    "value": "StyledComponentProps",
    "start": 9,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 32,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"@ts-bug/styles\"",
    "start": 37,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 55,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 62,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "SvgIconProps",
    "start": 72,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 85,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "StyledComponentProps",
    "start": 93,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"root\"",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 151,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 158,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "SomeInterface",
    "start": 168,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "myProp",
    "start": 188,
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
    "value": "string",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 206,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 214,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "SvgIcon",
    "start": 220,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "SomeInterface",
    "start": 229,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 244,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 251,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "SvgIcon",
    "start": 259,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
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
            "name": "SvgIcon",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./SvgIcon",
        "raw": "\"./SvgIcon\"",
        "start": 20,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createSvgIcon",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 62
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
                "start": 69,
                "end": 75
              },
              "start": 67,
              "end": 75
            },
            "start": 63,
            "end": 75
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "displayName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 90,
                "end": 96
              },
              "start": 88,
              "end": 96
            },
            "start": 77,
            "end": 96
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SvgIcon",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 113
            },
            "typeArguments": null,
            "start": 99,
            "end": 113
          },
          "start": 97,
          "end": 113
        },
        "body": null,
        "expression": false,
        "start": 40,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 115
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
    "value": "SvgIcon",
    "start": 7,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"./SvgIcon\"",
    "start": 20,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 33,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 40,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "createSvgIcon",
    "start": 49,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "displayName",
    "start": 77,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 99,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "SvgIcon",
    "start": 106,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
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
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledComponentProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 37
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 46
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 38,
              "end": 61
            }
          ],
          "start": 37,
          "end": 62
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "classes",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 76
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 85
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ClassKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 94
                        },
                        "typeArguments": null,
                        "start": 86,
                        "end": 94
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 96,
                        "end": 102
                      }
                    ],
                    "start": 85,
                    "end": 103
                  },
                  "start": 79,
                  "end": 103
                },
                "start": 77,
                "end": 103
              },
              "accessibility": null,
              "static": false,
              "start": 69,
              "end": 104
            }
          ],
          "start": 63,
          "end": 106
        },
        "declare": false,
        "start": 7,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 106
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 107
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "StyledComponentProps",
    "start": 17,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "ClassKey",
    "start": 38,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 47,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "classes",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "ClassKey",
    "start": 86,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
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
            "name": "createSvgIcon",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 22
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createSvgIcon",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 22
          },
          "importKind": "value",
          "start": 9,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@ts-bug/core/utils",
        "raw": "\"@ts-bug/core/utils\"",
        "start": 30,
        "end": 50
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 51
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createSvgIcon",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 80
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Hello",
            "raw": "\"Hello\"",
            "start": 81,
            "end": 88
          },
          {
            "type": "Literal",
            "value": "ArrowLeft",
            "raw": "\"ArrowLeft\"",
            "start": 90,
            "end": 101
          }
        ],
        "optional": false,
        "start": 67,
        "end": 102
      },
      "exportKind": "value",
      "start": 52,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 104
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
    "value": "createSvgIcon",
    "start": 9,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 25,
    "end": 29
  },
  {
    "type": "String",
    "value": "\"@ts-bug/core/utils\"",
    "start": 30,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 52,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 59,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "createSvgIcon",
    "start": 67,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"ArrowLeft\"",
    "start": 90,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  }
]
```
