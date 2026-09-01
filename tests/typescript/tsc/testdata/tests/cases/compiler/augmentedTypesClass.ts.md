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
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 28
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 41
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 44,
                "end": 47
              },
              "expression": false,
              "start": 41,
              "end": 47
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 31,
            "end": 47
          }
        ],
        "start": 29,
        "end": 49
      },
      "abstract": false,
      "declare": false,
      "start": 20,
      "end": 49
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 56
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 59,
            "end": 60
          },
          "definite": false,
          "start": 54,
          "end": 60
        }
      ],
      "declare": false,
      "start": 50,
      "end": 61
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c4",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 101
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 114
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 117,
                "end": 120
              },
              "expression": false,
              "start": 114,
              "end": 120
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 104,
            "end": 120
          }
        ],
        "start": 102,
        "end": 122
      },
      "abstract": false,
      "declare": false,
      "start": 93,
      "end": 122
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c4",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 130
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 136
            },
            "initializer": null,
            "computed": false,
            "start": 133,
            "end": 136
          }
        ],
        "start": 131,
        "end": 138
      },
      "const": false,
      "declare": false,
      "start": 123,
      "end": 138
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 147
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 20,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 31,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 104,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 123,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  }
]
```
