__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 7,
                "end": 9
              },
              "start": 5,
              "end": 9
            },
            "start": 4,
            "end": 9
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 33,
                  "end": 37
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "optional": false,
                "computed": false,
                "start": 33,
                "end": 39
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 42,
                "end": 43
              },
              "start": 33,
              "end": 43
            },
            "directive": null,
            "start": 33,
            "end": 44
          }
        ],
        "start": 27,
        "end": 46
      },
      "expression": false,
      "start": 12,
      "end": 46
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
        "start": 54,
        "end": 56
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 74
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 75,
        "end": 78
      },
      "abstract": false,
      "declare": false,
      "start": 48,
      "end": 78
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
        "start": 85,
        "end": 87
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 96,
        "end": 100
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 101,
        "end": 104
      },
      "abstract": false,
      "declare": false,
      "start": 79,
      "end": 104
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 122,
        "end": 127
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 128,
        "end": 131
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 131
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 140
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "value": 42,
        "raw": "42",
        "start": 149,
        "end": 151
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 152,
        "end": 155
      },
      "abstract": false,
      "declare": false,
      "start": 132,
      "end": 155
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 164
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "value": "hello",
        "raw": "\"hello\"",
        "start": 173,
        "end": 180
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 181,
        "end": 184
      },
      "abstract": false,
      "declare": false,
      "start": 156,
      "end": 184
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 193
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 203
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 204,
        "end": 207
      },
      "abstract": false,
      "declare": false,
      "start": 185,
      "end": 207
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 216
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 228
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 229,
        "end": 232
      },
      "abstract": false,
      "declare": false,
      "start": 208,
      "end": 232
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 232
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 12,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 48,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 54,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 57,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 65,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 85,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 88,
    "end": 95
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 105,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 111,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 114,
    "end": 121
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 138,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 141,
    "end": 148
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 156,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 162,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 165,
    "end": 172
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 185,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 191,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 194,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 208,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 214,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 217,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  }
]
```
