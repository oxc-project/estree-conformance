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
        "name": "Cls1",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 18
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
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
            "start": 25,
            "end": 34
          }
        ],
        "start": 19,
        "end": 36
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 36
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls2",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 55
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
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
            "start": 62,
            "end": 71
          }
        ],
        "start": 56,
        "end": 73
      },
      "abstract": false,
      "declare": true,
      "start": 37,
      "end": 73
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 75
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
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 37,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Cls2",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 62,
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
    "value": "number",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
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
            "name": "Cls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "exportKind": "value",
          "start": 8,
          "end": 12
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "CCls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 27
          },
          "exportKind": "value",
          "start": 14,
          "end": 27
        }
      ],
      "source": null,
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
            "name": "Cls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 42
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 42
          },
          "exportKind": "value",
          "start": 38,
          "end": 42
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 48
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "CCls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "exportKind": "value",
          "start": 44,
          "end": 57
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 59
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
            "name": "Cls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 72
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "CCCls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 82
          },
          "exportKind": "value",
          "start": 68,
          "end": 82
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 60,
      "end": 84
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
            "name": "Cls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 97
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "CCCls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 107
          },
          "exportKind": "value",
          "start": 93,
          "end": 107
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 85,
      "end": 109
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 109
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
    "value": "Cls1",
    "start": 8,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 14,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 19,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "CCls1",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
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
    "value": "Cls2",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Cls2",
    "start": 44,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 49,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "CCls2",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
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
    "value": "Cls1",
    "start": 68,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 73,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "CCCls1",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Cls2",
    "start": 93,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 98,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "CCCls2",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  }
]
```
