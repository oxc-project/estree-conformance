__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Config",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "InitialOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 56
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InitialOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 56
                },
                "exportKind": "value",
                "start": 42,
                "end": 56
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 29,
            "end": 62
          }
        ],
        "start": 25,
        "end": 64
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 64
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
            "name": "Config",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 80
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Config",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 80
          },
          "exportKind": "value",
          "start": 74,
          "end": 80
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 65,
      "end": 83
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigGlobals",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 116
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 124,
                "end": 131
              },
              "start": 122,
              "end": 131
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 132
          }
        ],
        "start": 117,
        "end": 134
      },
      "declare": true,
      "start": 85,
      "end": 134
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InitialOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 163
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "globals",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConfigGlobals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 193
                },
                "typeArguments": null,
                "start": 180,
                "end": 193
              },
              "start": 178,
              "end": 193
            },
            "accessibility": null,
            "static": false,
            "start": 170,
            "end": 194
          }
        ],
        "start": 166,
        "end": 196
      },
      "declare": true,
      "start": 136,
      "end": 197
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 197
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
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "InitialOptions",
    "start": 42,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 85,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 93,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "ConfigGlobals",
    "start": 103,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 124,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 136,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 144,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "InitialOptions",
    "start": 149,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "globals",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "ConfigGlobals",
    "start": 180,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 78
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 86
          },
          "optional": false,
          "computed": false,
          "start": 72,
          "end": 86
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 96,
            "end": 98
          },
          "id": null,
          "generator": false,
          "start": 89,
          "end": 98
        },
        "start": 72,
        "end": 98
      },
      "directive": null,
      "start": 72,
      "end": 99
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 72,
  "end": 99
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  }
]
```
