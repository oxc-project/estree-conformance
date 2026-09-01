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
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 18
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 37
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 38,
          "end": 41
        },
        "declare": false,
        "start": 26,
        "end": 41
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 19,
      "end": 41
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 60
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 79
                    },
                    "init": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 82,
                      "end": 84
                    },
                    "definite": false,
                    "start": 78,
                    "end": 84
                  }
                ],
                "declare": false,
                "start": 74,
                "end": 85
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 67,
              "end": 85
            }
          ],
          "start": 61,
          "end": 87
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 49,
        "end": 87
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 42,
      "end": 87
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 103,
              "end": 105
            },
            "definite": false,
            "start": 99,
            "end": 105
          }
        ],
        "declare": false,
        "start": 95,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 88,
      "end": 106
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "uninstantiated",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 138
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [],
          "start": 139,
          "end": 142
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 114,
        "end": 142
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 142
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 143
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
    "value": "c",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 26,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 42,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 49,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 88,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 95,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 114,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "uninstantiated",
    "start": 124,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exportKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 18,
        "end": 28
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 29
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 46
          },
          "exportKind": "value",
          "start": 39,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 54,
        "end": 64
      },
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 65
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "exportKind": "value",
          "start": 75,
          "end": 76
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 79
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "instantiatedModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 101
          },
          "exportKind": "value",
          "start": 78,
          "end": 101
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 109,
        "end": 119
      },
      "exportKind": "value",
      "attributes": [],
      "start": 66,
      "end": 120
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
            "name": "uninstantiated",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 144
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "uninstantiated",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 144
          },
          "exportKind": "value",
          "start": 130,
          "end": 144
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 152,
        "end": 162
      },
      "exportKind": "value",
      "attributes": [],
      "start": 121,
      "end": 163
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "exportKind": "value",
          "start": 173,
          "end": 174
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 182,
        "end": 192
      },
      "exportKind": "value",
      "attributes": [],
      "start": 164,
      "end": 193
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 193
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
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"./server\"",
    "start": 18,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 41,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 49,
    "end": 53
  },
  {
    "type": "String",
    "value": "\"./server\"",
    "start": 54,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 75,
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
    "value": "m",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 80,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "instantiatedModule",
    "start": 83,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 104,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"./server\"",
    "start": 109,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "uninstantiated",
    "start": 130,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 147,
    "end": 151
  },
  {
    "type": "String",
    "value": "\"./server\"",
    "start": 152,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 177,
    "end": 181
  },
  {
    "type": "String",
    "value": "\"./server\"",
    "start": 182,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  }
]
```
