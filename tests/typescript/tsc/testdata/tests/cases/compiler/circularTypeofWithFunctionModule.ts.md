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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 30
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 31,
        "end": 33
      },
      "abstract": false,
      "declare": false,
      "start": 21,
      "end": 33
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "maker",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 49
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 58,
              "end": 64
            },
            "start": 56,
            "end": 64
          },
          "start": 51,
          "end": 64
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "maker",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 79
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 83
            },
            "start": 74,
            "end": 83
          },
          "typeArguments": null,
          "start": 67,
          "end": 83
        },
        "start": 65,
        "end": 83
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "maker",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 102
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 106
              },
              "optional": false,
              "computed": false,
              "start": 97,
              "end": 106
            },
            "start": 90,
            "end": 107
          }
        ],
        "start": 84,
        "end": 109
      },
      "expression": false,
      "start": 35,
      "end": 109
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "maker",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 126
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
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 149
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 161
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 162,
                "end": 164
              },
              "abstract": false,
              "declare": false,
              "start": 140,
              "end": 164
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 133,
            "end": 164
          }
        ],
        "start": 127,
        "end": 166
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 111,
      "end": 166
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 166
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 35,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "maker",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 51,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "maker",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 90,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "maker",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 111,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "maker",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 133,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 146,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 150,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  }
]
```
