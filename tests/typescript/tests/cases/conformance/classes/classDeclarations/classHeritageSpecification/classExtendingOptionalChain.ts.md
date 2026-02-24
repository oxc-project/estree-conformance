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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 33,
                "end": 35
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 35
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 35
          }
        ],
        "start": 12,
        "end": 37
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 53
      },
      "typeParameters": null,
      "superClass": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "optional": true,
          "computed": false,
          "start": 62,
          "end": 66
        },
        "start": 62,
        "end": 66
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 67,
        "end": 69
      },
      "abstract": false,
      "declare": false,
      "start": 45,
      "end": 69
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 88
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 101
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 104
              },
              "optional": true,
              "computed": false,
              "start": 100,
              "end": 104
            },
            "start": 100,
            "end": 104
          },
          "typeArguments": null,
          "start": 100,
          "end": 104
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 105,
        "end": 107
      },
      "abstract": false,
      "declare": false,
      "start": 80,
      "end": 107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 107
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
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 51,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 54,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 63,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 80,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 86,
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
    "value": "A",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 101,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  }
]
```
