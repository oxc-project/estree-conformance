__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 35
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
        "start": 38,
        "end": 40
      },
      "expression": false,
      "start": 19,
      "end": 40
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 54
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 57,
            "end": 59
          },
          "definite": false,
          "start": 47,
          "end": 59
        }
      ],
      "declare": false,
      "start": 41,
      "end": 60
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 73
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 74,
        "end": 76
      },
      "abstract": false,
      "declare": false,
      "start": 61,
      "end": 76
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "__esModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 100
            },
            "init": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 103,
              "end": 108
            },
            "definite": false,
            "start": 90,
            "end": 108
          }
        ],
        "declare": false,
        "start": 84,
        "end": 109
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 77,
      "end": 109
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
            "name": "require",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 125
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 125
          },
          "exportKind": "value",
          "start": 118,
          "end": 125
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 134
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 134
          },
          "exportKind": "value",
          "start": 127,
          "end": 134
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 142
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 142
          },
          "exportKind": "value",
          "start": 136,
          "end": 142
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 110,
      "end": 144
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 144
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 19,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 28,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 47,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 77,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "__esModule",
    "start": 90,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 110,
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
    "value": "require",
    "start": 118,
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
    "value": "exports",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 35
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
        "start": 38,
        "end": 40
      },
      "expression": false,
      "start": 19,
      "end": 40
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 54
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 57,
            "end": 59
          },
          "definite": false,
          "start": 47,
          "end": 59
        }
      ],
      "declare": false,
      "start": 41,
      "end": 60
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 73
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 74,
        "end": 76
      },
      "abstract": false,
      "declare": false,
      "start": 61,
      "end": 76
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "__esModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 100
            },
            "init": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 103,
              "end": 108
            },
            "definite": false,
            "start": 90,
            "end": 108
          }
        ],
        "declare": false,
        "start": 84,
        "end": 109
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 77,
      "end": 109
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
            "name": "require",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 125
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 125
          },
          "exportKind": "value",
          "start": 118,
          "end": 125
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 134
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 134
          },
          "exportKind": "value",
          "start": 127,
          "end": 134
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 142
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 142
          },
          "exportKind": "value",
          "start": 136,
          "end": 142
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 110,
      "end": 144
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 144
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 19,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 28,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 47,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 77,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "__esModule",
    "start": 90,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 110,
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
    "value": "require",
    "start": 118,
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
    "value": "exports",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  }
]
```
