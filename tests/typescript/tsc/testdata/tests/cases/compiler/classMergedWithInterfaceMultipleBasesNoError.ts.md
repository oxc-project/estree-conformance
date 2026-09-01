__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 14,
        "end": 17
      },
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 31
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 32,
        "end": 35
      },
      "declare": false,
      "start": 18,
      "end": 35
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 47
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 48,
        "end": 51
      },
      "declare": false,
      "start": 36,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 77
          },
          "typeArguments": null,
          "start": 74,
          "end": 77
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 82
          },
          "typeArguments": null,
          "start": 79,
          "end": 82
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 83,
        "end": 86
      },
      "declare": false,
      "start": 52,
      "end": 86
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 96
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 97,
        "end": 100
      },
      "abstract": false,
      "declare": false,
      "start": 87,
      "end": 100
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 131,
          "end": 134
        },
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
                "name": "observer",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 158
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 161,
                  "end": 165
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handleIntersection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 184
                },
                "optional": false,
                "computed": false,
                "start": 161,
                "end": 184
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 141,
              "end": 185
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "handleIntersection",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 217
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 226,
                  "end": 229
                },
                "id": null,
                "generator": false,
                "start": 220,
                "end": 229
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 190,
              "end": 229
            }
          ],
          "start": 135,
          "end": 231
        },
        "abstract": false,
        "declare": false,
        "start": 117,
        "end": 231
      },
      "exportKind": "value",
      "start": 102,
      "end": 231
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 231
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 18,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 36,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 52,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 62,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 66,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 102,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 109,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 117,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 123,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 141,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "observer",
    "start": 150,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "handleIntersection",
    "start": 166,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 190,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "handleIntersection",
    "start": 199,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  }
]
```
