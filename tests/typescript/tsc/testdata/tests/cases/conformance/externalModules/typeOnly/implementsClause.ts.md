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
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 26
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 27,
          "end": 29
        },
        "declare": false,
        "start": 7,
        "end": 29
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
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
    "value": "Component",
    "start": 17,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
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
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 22
          },
          "start": 12,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "'./types'",
        "start": 28,
        "end": 37
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 38
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
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 53
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 53
          },
          "exportKind": "value",
          "start": 48,
          "end": 53
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 39,
      "end": 56
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 57
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
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 14,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 17,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27
  },
  {
    "type": "String",
    "value": "'./types'",
    "start": 28,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
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
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 22
          },
          "start": 12,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "'./types'",
        "start": 28,
        "end": 37
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 38
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedNamespace",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 66
          },
          "start": 46,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ns",
        "raw": "'./ns'",
        "start": 72,
        "end": 78
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 79
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 88
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "types",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 105
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 115
            },
            "optional": false,
            "computed": false,
            "start": 100,
            "end": 115
          },
          "typeArguments": null,
          "start": 100,
          "end": 115
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 116,
        "end": 118
      },
      "abstract": false,
      "declare": false,
      "start": 81,
      "end": 118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "nestedNamespace",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 153
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "types",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 159
              },
              "optional": false,
              "computed": false,
              "start": 138,
              "end": 159
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 169
            },
            "optional": false,
            "computed": false,
            "start": 138,
            "end": 169
          },
          "typeArguments": null,
          "start": 138,
          "end": 169
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 170,
        "end": 172
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 172
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
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
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 14,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 17,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27
  },
  {
    "type": "String",
    "value": "'./types'",
    "start": 28,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 48,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "nestedNamespace",
    "start": 51,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 67,
    "end": 71
  },
  {
    "type": "String",
    "value": "'./ns'",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 81,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 89,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 100,
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
    "value": "Component",
    "start": 106,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 127,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "nestedNamespace",
    "start": 138,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 160,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  }
]
```
